import React, { Component } from 'react'
import NoteList from '../containers/NoteList'
import Navigation from '../containers/Navigation'

class ListView extends Component {
  render() {
    return (
      <div>
        <NoteList />
        <Navigation />
      </div>
    );
  }
}

export default ListView;
