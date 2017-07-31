import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Note from './Note'
import Button from 'material-ui/Button'
import { NoteListBox } from '../_styledComponents'

class Notes extends Component {

  static propTypes = {
    notes: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    showAll: PropTypes.func.isRequired,
  }

  filteredOutcome(array, query) {
    return array.filter(item => {
      const filter = query.toUpperCase()
      const title = item.title.toUpperCase()
      const text = item.text.toUpperCase()
      return title.includes(filter) || text.includes(filter)
    })
  }

  render() {
    const { notes, filter, showAll } = this.props
    const filteredList = this.filteredOutcome(notes, filter)
    const NoteList = filteredList.map((note, i) => (
      <Note note={note} key={note.key} index={i}/>
    ))

    const NoNotesStyle = {width: '100%'}
    const NoNotesPlaceholer = () => !filter ? false :
      <Button onClick={showAll} style={NoNotesStyle}>
        Click to show all notes
      </Button>

    return (
      <NoteListBox>
        <NoNotesPlaceholer/>
        {NoteList}
      </NoteListBox>
    )
  }
}

export default Notes
