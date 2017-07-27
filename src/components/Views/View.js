import React from 'react'
import Navigation from '../../containers/Navigation'
import NoteList from '../../containers/NoteList'
import TextFields from '../../containers/TextFields'
import Greeting from '../Greeting'
import NoMatch from '../NoMatch'

import { Route, Switch } from 'react-router-dom'
import { FlexBox, MobileHiddenBox } from '../_styledComponents'

function NoteView(props) {
  console.log(props.location)
  return (
    <FlexBox>
      <MobileHiddenBox>
        <NoteList />
        <Navigation />
      </MobileHiddenBox>
      <Switch>
        <Route exact path="/note/:id" component={TextFields}/>
        <Route exact path="/" component={Greeting}/>
      </Switch>
    </FlexBox>
  )
}

export default NoteView
