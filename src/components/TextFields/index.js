import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Buttons from './Buttons'
import NoteBar from './NoteBar'
import { FlexBoxWraped, DesktopHiddenBox, FlexItem } from '../_styledComponents'

const styleSheet = createStyleSheet('TextFields', theme => ({
  input: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
}))

class TextFields extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: {},
      isNew: null,
      isNoteDisabled: null,
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    notes: PropTypes.array.isRequired,
    removeNote: PropTypes.func.isRequired,
    addNote: PropTypes.func.isRequired,
    updateNote: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.updateTextFields(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    const nextId = nextProps.match.params.id
    if(this.props.match.params.id !== nextId) {
      this.updateTextFields(nextId)
    }
  }

  updateTextFields(id) {
    let notes = this.props.notes
    let note, noteIndex
    let isNew = true
    let isNoteDisabled = false

    if (id === 'new' && notes.length) {
      noteIndex = notes.length
      note = { id: this.idGenerator(notes), title: '', text: '' }
    } else if (id === 'new' && notes.length < 1) {
      noteIndex = 0
      note = { id: '001', title: '', text: '' }
    } else if (notes.findIndex((note) => note.id === id) !== -1) {
      noteIndex = notes.findIndex((note) => note.id === id)
      note = notes[noteIndex]
      isNew = false
      isNoteDisabled = true
    } else {
      this.props.history.push('/404')
    }

    this.state = {
      note: { ...note, index: noteIndex },
      isNew: isNew,
      isNoteDisabled: isNoteDisabled,
    }
  }

  idGenerator (array) {
    return '00' + (Number([...array].splice(-1, 1)[0].id) + 1)
  }

  removeNote = () => {
    this.props.removeNote(this.state.note.index)
    this.props.history.push('/')
  }

  addNote = note => {
    this.props.addNote(note)
    this.props.history.push('/')
  }

  handleNoteDisabled = () => {
    this.setState(prevState => ({
      isNoteDisabled: !prevState.isNoteDisabled
    }))
  }

  handleEditButton = () => {
    const { note, isNoteDisabled, isNew } = this.state
    this.handleNoteDisabled()

    if (!isNoteDisabled && !isNew) {
      this.props.updateNote(note)
    } else if (isNew) {
      this.addNote(note)
    }
  }

  handleInputChange = (e) => {
    this.setState({
      note: {
        ...this.state.note,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    const classes = this.props.classes
    const { note, isNoteDisabled, isNew } = this.state

    return (
      <FlexItem>
        <FlexBoxWraped>
          <TextField
            name="title"
            label="Title"
            className={classes.input}
            value={note.title}
            onChange={this.handleInputChange}
            marginForm
            disabled={isNoteDisabled}
          />
          <NoteBar
            isNew={isNew}
            isNoteDisabled={isNoteDisabled}
            removeNote={this.removeNote}
            handleEditButton={this.handleEditButton}
          />
          <TextField
            name="text"
            label="Note"
            className={classes.input}
            rows="6"
            value={note.text}
            onChange={this.handleInputChange}
            multiline
            rowsMax="20"
            marginForm
            disabled={isNoteDisabled}
            autoFocus
          />
        </FlexBoxWraped>
        <DesktopHiddenBox>
          <Buttons
            isNoteDisabled={isNoteDisabled}
            handleEditButton={this.handleEditButton}
          />
        </DesktopHiddenBox>
      </FlexItem>
    )
  }
}


export default withStyles(styleSheet)(TextFields)
