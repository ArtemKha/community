import React from 'react'
import NoteList from '../../../containers/NoteList'
import Navigation from '../../../containers/Navigation'
import Greeting from './Greeting'
import { FlexBox, MobileHiddenBox } from '../../_styledComponents'

function ListView({ history }) {
  return (
    <FlexBox>
      <NoteList />
      <MobileHiddenBox>
        <Greeting history={history}/>
      </MobileHiddenBox>
      <Navigation />
    </FlexBox>
  )
}

export default ListView
