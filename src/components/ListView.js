import React, { Component } from 'react'
import NoteList from '../containers/NoteList'
import Navigation from '../containers/Navigation'
import Greeting from './Greeting'
import { FlexBox, MobileHiddenBox } from './_styledComponents'

class ListView extends Component {
  render() {
    return (
      <FlexBox>
        <NoteList />
        <MobileHiddenBox>
          <Greeting history={this.props.history}/>
        </MobileHiddenBox>
        <Navigation history={this.props.history}/>
      </FlexBox>
    );
  }
}

export default ListView;
