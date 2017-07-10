import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import TextField from 'material-ui/TextField'

const styleSheet = createStyleSheet('TextFields', theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
}))

class TextFields extends Component {
  state = {
    title: '',
    text: '',
  }

  render() {
    const classes = this.props.classes

    return (
      <div className={classes.container}>
        <TextField
          id="name"
          label="Title"
          className={classes.input}
          defaultValue={this.state.title}
          onChange={event => this.setState({ name: event.target.value })}
          marginForm
          disabled={this.props.disabled}
        />
        <TextField
          id="multiline"
          label="Note"
          multiline
          rows="4"
          defaultValue={this.state.text}
          className={classes.input}
          marginForm
          rowsMax="23"
          disabled={this.props.disabled}
        />
      </div>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(TextFields)
