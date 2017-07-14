import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import ControlButtons from '../../containers/ControlButtons'
import NoteBar from './NoteBar'

const styleSheet = createStyleSheet('TextFields', theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    'flexDirection': 'row',
    'justify-content': 'center',
    // border: '5px solid red',
  },
  input: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  main: {
    // border: '5px solid green',
    'flex-grow': 1,
  }
}))

class TextFields extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: {},
      isNew: '',
      isNoteDisabled: '',
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    notes: PropTypes.array.isRequired,
    removeNote: PropTypes.func.isRequired,
  }

  idGenerator (array, prefix = '00') {
    return prefix + (Number([...array].splice(-1, 1)[0].id) + 1)
  }

  removeNote = () => {
    this.props.removeNote(this.state.note.index)
    this.props.history.push('/')
  }

  handleNoteDisabled = () => {
    const { isNoteDisabled } = this.state
    this.setState({
      isNoteDisabled: !isNoteDisabled
    })
  }

  componentWillMount() {
    let note, noteIndex, isNew, isNoteDisabled
    const { notes } = this.props
    const { match } = this.props

    //check for adding or editing
    if (match.params.id === 'new') {
      noteIndex = notes.length
      note = { id: this.idGenerator(notes), title: '', text: '' }
      isNew = true
      isNoteDisabled = false
    } else {
      noteIndex = notes.findIndex((note) => note.id === match.params.id)
      note = notes[noteIndex]
      isNew = false
      isNoteDisabled = true
    }

    this.setState({
      note: { ...note, index: noteIndex },
      isNew: isNew,
      isNoteDisabled: isNoteDisabled,
    })
  }

  render() {
    const { classes } = this.props
    const { history } = this.props
    const { note } = this.state
    const { title, text } = note



    return (
      <div className={classes.main}>
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
      </div>
        <ControlButtons
          textState={this.state}
          history={history}
          handleNoteDisabled={this.handleNoteDisabled}
        />
      </div>
    )
  }
}


export default withStyles(styleSheet)(TextFields)
