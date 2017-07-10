import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import Note from './Note'

class Notes extends Component {

  static propTypes = {
    addNote: PropTypes.func.isRequired,
    removeNote: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired,
    ownProps: PropTypes.object.isRequired
  }

  render() {
    const { notes } = this.props;
    const NoteList = notes.map(note => (
      <Note note={note} key={note.id} history={this.props.history}/>
    ));

    return (
      <div>
        {NoteList}
        <Navigation />
      </div>
    );
  }
}

export default Notes;
