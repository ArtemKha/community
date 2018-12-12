import React from 'react'
import Navigation from '../../containers/Navigation'
import EventFields from '../EventFields'
import { FlexBox, MobileHiddenBox } from '../_styledComponents'

function NoteView({ match: { params } }) {
  return (
    <FlexBox>
      <MobileHiddenBox>
        <Navigation />
      </MobileHiddenBox>
      <EventFields params={params} />
    </FlexBox>
  )
}

export default NoteView
