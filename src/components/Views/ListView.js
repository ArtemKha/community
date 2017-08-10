import React from 'react'
import NoteList from '../../containers/NoteList'
import Navigation from '../../containers/Navigation'
import TextFields from '../../containers/TextFields'
import Greeting from './Greeting'

import { Route } from 'react-router-dom'
import { FlexBox, MobileHiddenBox, NoteListBox, FlexItem } from '../_styledComponents'
import styled from 'styled-components'


function ListView({ history }) {
  const display = history.location.pathname === '/notes' ? 'none' : 'block'
  const displayNav = history.location.pathname === '/notes' ? 'block' : 'none'

  const HiddenFields = styled.div`
    @media (max-width: 700px) {
      display: ${display};
    }
  `
  const Nav = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 1;

    @media (max-width: 700px) {
      display: ${displayNav};
    }
  `
  const List = styled.div`
    @media (max-width: 700px) {
      display: ${displayNav};
    }
  `
  const style = `
    @media (max-width: 700px) {
      display: ${displayNav};
    }
  `

  return (
    <FlexBox>
      <List>
        <NoteListBox>
          <NoteList />
        </NoteListBox>
      </List>
      <FlexItem>
        <MobileHiddenBox>
          <Route exact path="/notes" component={Greeting}/>
        </MobileHiddenBox>
        <div className={style}>
          <Route path="/notes/:id" component={TextFields}/>
        </div>
      </FlexItem>
      <Nav>
        <Navigation />
      </Nav>
    </FlexBox>
  )
}

export default ListView
