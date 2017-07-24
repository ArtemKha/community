import React from 'react'
import Navigation from '../containers/Navigation'
import NoteList from '../containers/NoteList'
import TextFields from '../containers/TextFields'
import { FlexBox, MobileHiddenBox } from './_styledComponents'

function NoteView() {
  return (
    <div>
      <FlexBox>
        <MobileHiddenBox>
          <NoteList />
        </MobileHiddenBox>
        <TextFields />
      </FlexBox>
      <MobileHiddenBox>
        <Navigation />
      </MobileHiddenBox>
    </div>
  );
}

export default NoteView
