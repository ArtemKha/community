import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Note from './Note'
import Button from 'material-ui/Button'
import { NoteListBox } from '../_styledComponents'
import ReactLoading from 'react-loading'
import { sort, prop, descend } from 'ramda'

class Notes extends Component {

  static propTypes = {
    notes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
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
    const { notes, filter, showAll, loading } = this.props
    const filteredList = this.filteredOutcome(notes, filter)
    const sotrtedList = sort(descend(prop('timestamp')))(filteredList)

    const NoteList = sotrtedList.map((note, i) => (
      <Note note={note} key={note.key} index={i}/>
    ))

    const NoNotesPlaceholer =  filter &&
      <Button onClick={showAll} style={{width: '100%'}}>
        Click to show all notes
      </Button>
    const NotesLoading = () => loading &&
      <ReactLoading type="bubbles" color="purple"/>

    return (
      <div>
        {NoNotesPlaceholer}
        <NotesLoading />
        {NoteList}
      </div>
    )
  }
}

export default Notes
