import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Buttons from './Buttons'

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

    const { notes, match } = this.props
    const noteIndex = notes.findIndex((note) => note.id === match.params.id)
    const note = notes[noteIndex]

    this.state = {
      note: {
        id: note.id,
        title: note.title,
        text: note.text,
        index: noteIndex
      },
      disabled: true,
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    notes: PropTypes.array.isRequired,
    updateNote: PropTypes.func.isRequired,
    addNote: PropTypes.func.isRequired,
    removeNote: PropTypes.func.isRequired,
  }

  changeActive = () => {
    const {note, disabled} = this.state
    this.setState({
      disabled: !disabled
    })
    if (!disabled)
      this.props.updateNote(note)
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
          disabled={this.state.disabled}
        />
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
          disabled={this.state.disabled}
        />
        <Buttons
          changeActive={this.changeActive}
          toList={this.toList}
          removeNote={this.removeNote}
          disabled={this.state.disabled}
        />
      </div>
    )
  }
}


export default withStyles(styleSheet)(TextFields)
