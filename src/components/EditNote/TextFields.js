import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import EditButton from './EditButton'

import TextField from 'material-ui/TextField'
import green from 'material-ui/colors/green';

const styleSheet = createStyleSheet('TextFields', theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    '&:disabled': {
      'color': green,
    },
  },
}))

class TextFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        id: props.note.id,
        title: props.note.title,
        text: props.note.text,
      },
      disabled: true,
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    note: PropTypes.object.isRequired,
    updateNote: PropTypes.func.isRequired,
  }

  changeActive = () => {
    const {note, disabled} = this.state
    this.setState({
      disabled: !disabled
    })
    if (!disabled)
      this.props.updateNote(note)
  }

  render() {
    const classes = this.props.classes
    const {title, text} = this.props.note
    return (
      <div className={classes.container}>
        <TextField
          id="name"
          label="Title"
          className={classes.input}
          defaultValue={title}
          onChange={event => this.setState({ note: {title: event.target.value} })}
          marginForm
          disabled={this.state.disabled}
        />
        <TextField
          id="multiline"
          label="Note"
          className={classes.input}
          rows="4"
          defaultValue={text}
          onChange={event => this.setState({ note: {text: event.target.value} })}
          multiline
          rowsMax="23"
          marginForm
          disabled={this.state.disabled}
        />
        <EditButton
          updateNote={this.props.updateNote}
          changeActive={this.changeActive}
          disabled={this.state.disabled}/>
      </div>
    )
  }
}


export default withStyles(styleSheet)(TextFields)
