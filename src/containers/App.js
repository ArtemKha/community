import React, { Component } from 'react'
import TextFields from './TextFields'
import NoteList from './NoteList'
import Navigation from './Navigation'

class App extends Component {

  render() {

    const flexbox = {
      display: 'flex',
    }

    const element = {
      'justify-content': 'flex-start',
    }

    return (
      <div>
        <NoteList />
        <Navigation />
        {/* <TextFields style={element}/> */}
      </div>
    );
  }
}

export default App;
