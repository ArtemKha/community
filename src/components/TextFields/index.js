import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Input from 'material-ui/Input/Input'
import Buttons from './Buttons'
import Info from './Info'
import Reminder from './Reminder'
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
  constructor() {
    super()
    this.state = {
      note: {},
      info: false,
      reminder: false,
      isNew: true,
      isNoteDisabled: false,
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
    const notes = this.props.notes
    let note, flags

    if (id === 'new') {
      note = this.createNewNote(notes)
      flags = { isNew: true, isNoteDisabled: false }
      this.setState({ note, ...flags })
    } else {
      note = notes.find((note) => note.id === id)
      if (note){
        flags = { isNew: false, isNoteDisabled: true }
        this.setState({ note, ...flags })
      } else
        this.props.history.push('/notes')
    }
  }

  //note creation
  createNewNote(notes) {
    const time = this.getTime()
    return {
      id: this.idGenerator(notes),
      title: '',
      text: '',
      created: time,
      updated: time,
      timestamp: Date.now(),
    }
  }

  saveNoteIntoList() {
    const { note, isNoteDisabled, isNew } = this.state
    const time = this.getTime()

    //check editing or creating note
    if (!isNoteDisabled && !isNew) {
      const edited = { ...note, updated: time, timestamp: Date.now() }
      this.props.updateNote(edited)
    } else if (isNew) {
      const title = note.title ? note.title : note.text.slice(0, 40)
      this.addNote({ ...note, title: title })
    }
  }

  addReminder = (time) => {
    const { note } = this.state
    this.handleReminderButton()
    console.log(time)

    this.props.match.params.id === 'new'
      ? this.setState({ remind: time })
      : this.props.updateNote({ ...note, remind: time })
  }

  //function helpers
  idGenerator (array) {
    if (array.length < 1)
      return '001'
    else
      return '00' + (Number([...array].splice(-1, 1)[0].id) + 1)
  }

  getTime() {
    const ut = new Date()
    const date = ut.toDateString()
    const fulltime = [ut.getHours(), ut.getMinutes(), ut.getSeconds()]
    const time = fulltime.map(number  => {
      if (number < 10) return '0' + number
      return number
    })
    return `${date} ${time[0]}:${time[1]}:${time[2]}`
  }

  //actions
  removeNote = () => {
    this.props.removeNote(this.state.note.key)
    this.props.history.push('/notes')
  }

  addNote = note => {
    this.props.addNote(note)
    this.props.history.push('/notes')
  }

  //handlers
  handleSaveButton = () => {
    this.handleOption('isNoteDisabled')
    this.saveNoteIntoList()
  }


  handleOption = option => {
    this.setState(prevState => ({
      [option]: !prevState[option]
    }))
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
    const { note, isNoteDisabled, isNew, info, reminder } = this.state

    return (
      <FlexItem>
        <FlexBoxWraped>
          <Input
            name="title"
            placeholder="Title"
            className={classes.input}
            value={note.title}
            onChange={this.handleInputChange}
            disabled={isNoteDisabled}
            disableUnderline
          />
          <NoteBar
            isNew={isNew}
            isNoteDisabled={isNoteDisabled}
            removeNote={this.removeNote}
            handleSaveButton={this.handleSaveButton}
            handleInfoButton={() => this.handleOption('info')}
            handleReminderButton={() => this.handleOption('reminder')}
          />
          <Info
            info={info}
            note={note}
            handleInfoButton={() => this.handleOption('info')}
          />
          <Reminder
            reminder={reminder}
            handleReminderButton={() => this.handleOption('reminder')}
            addReminder={this.addReminder}
          />
          <Input
            name="text"
            placeholder="Note: What's on your mind?"
            className={classes.input}
            rows="6"
            value={note.text}
            onChange={this.handleInputChange}
            multiline
            rowsMax="20"
            disabled={isNoteDisabled}
            autoFocus
            disableUnderline
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
