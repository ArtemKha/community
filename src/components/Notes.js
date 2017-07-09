import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

class Notes extends Component {

  static propTypes = {
    addNote: PropTypes.func.isRequired,
    removeNote: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired
  }


  render() {
    const { notes } = this.props;
    return (
      <div>
        {notes.map( (note, i) =>
          (
            <div key={i}>
              <p><strong>{note.title}</strong></p>
              <span>{note.text}</span>
            </div>
          )
        )}
        <Navigation />
      </div>
    );
  }
}

export default Notes;
