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

  //update view if note changed
  componentWillReceiveProps(nextProps) {
    const nextId = nextProps.match.params.id
    if(this.props.match.params.id !== nextId) {
      this.updateTextFields(nextId)
    }
  }

  updateTextFields(id) {
    let notes = this.props.notes
    let note, isNew = true, isNoteDisabled = false

    if (id === 'new') {
      note = this.createNewNote(notes)
    } else {
      note = notes.find((note) => note.id === id)
      if (note) {
        isNew = false
        isNoteDisabled = true
      } else {
        this.props.history.push('/404')
      }
    }

    this.setState({
      note: note,
      isNew: isNew,
      isNoteDisabled: isNoteDisabled,
    })
  }

  createNewNote(notes) {
    return {
      id: this.idGenerator(notes),
      title: '',
      text: '',
      created: this.getTime(),
      updated: this.getTime(),
    }
  }

  getTime() {
		const utTime = new Date()
		let month = utTime.getMonth()
    let day = utTime.getDate()

    if (month < 10 ) month = '0' + month
    if (day < 10) day = '0' + day
		const time = `${day}-${month}-${utTime.getFullYear()}`
		return time
	}


  idGenerator (array) {
    if (array.length < 1)
      return '001'
    else
      return '00' + (Number([...array].splice(-1, 1)[0].id) + 1)
  }

  removeNote = () => {
    this.props.removeNote(this.state.note.key)
    this.props.history.push('/notes')
  }

  addNote = note => {
    this.props.addNote(note)
    this.props.history.push('/notes')
  }

  handleNoteDisabled = () => {
    this.setState(prevState => ({
      isNoteDisabled: !prevState.isNoteDisabled
    }))
  }

  handleSaveButton = () => {
    const { note, isNoteDisabled, isNew } = this.state
    this.handleNoteDisabled()

    if (!isNoteDisabled && !isNew) {
      this.props.updateNote({ ...note, updated: this.getTime(),})
    } else if (isNew) {
      //if the Title of the note is empty then grab the text
      note.title
        ? this.addNote(note)
        : this.addNote({...note, title: note.text.slice(0, 40)})
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
            handleSaveButton={this.handleSaveButton}
          />
          <TextField
            name="text"
            className={classes.input}
            rows="6"
            value={note.text}
            placeholder="What great idea do you have?"
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
            handleSaveButton={this.handleSaveButton}
          />
        </DesktopHiddenBox>
      </FlexItem>
    )
  }
}

export default withStyles(styleSheet)(TextFields)
