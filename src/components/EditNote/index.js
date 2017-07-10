import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextFields from './TextFields'

class EditNote extends Component {

  static propTypes = {
    notes: PropTypes.array.isRequired,
    addNote: PropTypes.func.isRequired,
    removeNote: PropTypes.func.isRequired,
    updateNote: PropTypes.func.isRequired,
  }

  render() {
    const { notes, match } = this.props
    const note = notes.find(note => note.id === match.params.id)

    return (
      <div>
        <TextFields note={note} updateNote={this.props.updateNote}/>
      </div>
    )
  }
}

export default EditNote
