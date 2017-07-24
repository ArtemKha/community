import React from 'react'
import Navigation from '../../containers/Navigation'
import NoteList from '../../containers/NoteList'
import TextFields from '../../containers/TextFields'
import { FlexBox, MobileHiddenBox } from '../_styledComponents'

function NoteView() {
  return (
    <FlexBox>
      <MobileHiddenBox>
        <NoteList />
        <Navigation />
      </MobileHiddenBox>
      <TextFields />
    </FlexBox>
  )
}

export default NoteView
