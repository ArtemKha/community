import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Note from './Note'
import Button from 'material-ui/Button'
import { NoteListBox } from '../_styledComponents'

class Notes extends Component {

  static propTypes = {
    notes: PropTypes.array.isRequired,
    showAll: PropTypes.func.isRequired,
  }

  filterOutcome(array, query) {
    return array.filter(item => {
      const filter = query.toUpperCase()
      const title = item.title.toUpperCase()
      const text = item.text.toUpperCase()
      return title.includes(filter) || text.includes(filter)
    })
  }

  render() {
    const { notes, filter, showAll } = this.props

    const filteredList = this.filterOutcome(notes, filter)
    const NoteList = filteredList.map((note, i) => (
      <Note note={note} key={note.id} index={i}/>
    ))
    const NoNotesPlaceholer = () => !filter ? false :
      <Button onClick={showAll}>Click to show all notes</Button>

    return (
      <NoteListBox>
        <NoNotesPlaceholer />
        {NoteList}
      </NoteListBox>
    )
  }
}

export default Notes
