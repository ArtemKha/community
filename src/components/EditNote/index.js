import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EditButton from './EditButton'
import TextFields from './TextFields'

class EditNote extends Component {

  constructor(props) {
    super(props)
    this.state = {
      disabled: true
    }
  }

  changeActive = () => {
    const disabled = this.state.disabled
    this.setState({
      disabled: !disabled
    })
  }

  static propTypes = {
    //
  }

  render() {
    const { ownProps, note } = this.props
    return (
      <div>
        <TextFields disabled={this.state.disabled}/>
        <EditButton changeActive={this.changeActive} disabled={this.state.disabled}/>
      </div>
    )
  }
}

export default EditNote
