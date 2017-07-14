import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Note from './Note'
import Button from 'material-ui/Button'

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
    const noNotesPlaceholer = !filter ? false :
      <Button onClick={showAll} style={{}}>Click to show all!</Button>

    return (
      <div>
        {noNotesPlaceholer}
        {NoteList}
      </div>
    )
  }
}

export default Notes
