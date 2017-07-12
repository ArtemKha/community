import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import ControlButtons from './ControlButtons'
import NoteBar from './NoteBar'

const styleSheet = createStyleSheet('TextFields', theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
}))

class TextFields extends Component {
  constructor(props) {
    super(props);
    let note, noteIndex, isNew, isNoteDisabled
    const { notes, match } = this.props

    //check for adding or editing and fillout the fields, flags
    if (match.params.id === 'new') {
      noteIndex = notes.length
      note = {
        id: this.idGenerator(notes),
        title: '',
        text: ''
      }
      isNew = true
      isNoteDisabled = false
    } else {
      noteIndex = notes.findIndex((note) => note.id === match.params.id)
      note = notes[noteIndex]
      isNew = false
      isNoteDisabled = true
    }

    this.state = {
      note: {
        id: note.id,
        title: note.title,
        text: note.text,
        index: noteIndex
      },
      isNew: isNew,
      isNoteDisabled: isNoteDisabled,
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    notes: PropTypes.array.isRequired,
    updateNote: PropTypes.func.isRequired,
    addNote: PropTypes.func.isRequired,
    removeNote: PropTypes.func.isRequired,
  }

  idGenerator (array, prefix = '00') {
    return prefix + (Number([...array].splice(-1, 1)[0].id) + 1)
  }

  handleEditButton = () => {
    const {note, isNoteDisabled, isNew} = this.state
    this.setState({
      isNoteDisabled: !isNoteDisabled
    })
    if (!isNoteDisabled && isNew === false) {
      this.props.updateNote(note)
    } else if (isNew === true) {
      this.props.addNote(note)
      this.props.history.push('/')
    }
  }

  removeNote = () => {
    this.props.removeNote(this.state.note.index)
    this.props.history.push('/')
  }

  toList = () => {
    this.props.history.push('/')
  }

  render() {
    const { classes } = this.props
    const { note } = this.state
    const { title, text } = note

    return (
      <div className={classes.container}>
        <TextField
          id="name"
          label="Title"
          className={classes.input}
          defaultValue={title}
          onChange={event => this.setState({ note: {
            ...note,
            title: event.target.value}})}
          marginForm
          disabled={this.state.isNoteDisabled}
        />
        <NoteBar isNew={this.state.isNew} removeNote={this.removeNote}/>
        <TextField
          id="multiline"
          label="Note"
          className={classes.input}
          rows="4"
          defaultValue={text}
          onChange={event => this.setState({ note: {
            ...note,
            text: event.target.value}})}
          multiline
          rowsMax="24"
          marginForm
          disabled={this.state.isNoteDisabled}
          autoFocus
        />
        <ControlButtons
          handleEditButton={this.handleEditButton}
          toList={this.toList}
          disabled={this.state.isNoteDisabled}
        />
      </div>
    )
  }
}


export default withStyles(styleSheet)(TextFields)
