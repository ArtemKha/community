import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import ControlButtons from '../../containers/ControlButtons'
import NoteBar from './NoteBar'
import styled from 'styled-components'

const styleSheet = createStyleSheet('TextFields', theme => ({
  input: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
}))

const MainContainer = styled.div`
  flex-grow: 1;
`

const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class TextFields extends Component {
  constructor(props) {
    super(props)

    let note, noteIndex, isNew, isNoteDisabled
    const { notes, match } = this.props

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

    this.state = {
      note: { ...note, index: noteIndex },
      isNew: isNew,
      isNoteDisabled: isNoteDisabled,
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    notes: PropTypes.array.isRequired,
    removeNote: PropTypes.func.isRequired,
  }

  idGenerator (array) {
    return '00' + (Number([...array].splice(-1, 1)[0].id) + 1)
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

  render() {
    const { classes, history, match, notes } = this.props
    let { note, isNoteDisabled, isNew } = this.state
    let { title, text } = note

    console.log('from render', this.props.match.params.id)

    return (
      <MainContainer>
        <TextContainer>
          <TextField
            id="name"
            label="Title"
            className={classes.input}
            defaultValue={title}
            onChange={e => this.setState({note: { ...note, title: e.target.value}})}
            marginForm
            disabled={isNoteDisabled}
          />
          <NoteBar isNew={isNew} removeNote={this.removeNote}/>
          <TextField
            id="multiline"
            label="Note"
            className={classes.input}
            rows="4"
            defaultValue={text}
            onChange={e => this.setState({note: { ...note, text: e.target.value}})}
            multiline
            rowsMax="20"
            marginForm
            disabled={isNoteDisabled}
            autoFocus
          />
        </TextContainer>
        <ControlButtons
          textState={this.state}
          history={history}
          handleNoteDisabled={this.handleNoteDisabled}
        />
      </MainContainer>
    )
  }
}


export default withStyles(styleSheet)(TextFields)
