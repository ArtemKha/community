import React, { Component } from 'react'
import Navigation from '../containers/Navigation'
import NoteList from '../containers/NoteList'
import TextFields from '../containers/TextFields'
import { Route } from 'react-router-dom'
import { FlexBox, MobileHiddenBox } from './_styledComponents'

class NoteView extends Component {
  render() {
    return (
      <div>
        <MobileHiddenBox>
          <Navigation history={this.props.history}/>
        </MobileHiddenBox>
        <FlexBox>
          <MobileHiddenBox>
            <NoteList />
          </MobileHiddenBox>
          <Route path="/edit/:id" component={TextFields}/>
        </FlexBox>
      </div>
    );
  }
}

export default NoteView;
