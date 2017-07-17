import React, { Component } from 'react'
import Navigation from '../containers/Navigation'
import NoteList from '../containers/NoteList'
import TextFields from '../containers/TextFields'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: row;
`
class NoteView extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Box>
          <NoteList />
          <Route path="/edit/:id" component={TextFields}/>
        </Box>
      </div>
    );
  }
}

export default NoteView;
