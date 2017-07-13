import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import Typography from 'material-ui/Typography'
import Note from './Note'

class Notes extends Component {

  static propTypes = {
    notes: PropTypes.array.isRequired,
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
    const { notes, history } = this.props
    const query = history.location.search.slice(3)

    const filteredList = this.filterOutcome(notes, query)
    const NoteList = filteredList.map((note, i) => (
      <Note note={note} key={note.id} index={i} history={this.props.history}/>
    ))
    const noNotesPlaceholer = NoteList.length ? <div></div> :
      <Typography type="subheading" component="p" style={{padding: '50px'}}>
        No such notes...
      </Typography>

    return (
      <div>
        {NoteList}
        {noNotesPlaceholer}
        <Navigation history={this.props.history}/>
      </div>
    )
  }
}

export default Notes
