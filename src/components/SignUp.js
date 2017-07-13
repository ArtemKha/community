import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const styleSheet = createStyleSheet('SimpleAppBar', {
  root: {
    'max-width': '90%',
    marginTop: '10%',
    margin: '0 auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 200,
    padding: 30,
  },
  button: {
   marginTop: '10px',
  },
  input: {
    width: '100%',
  },
  paper: {
    'max-width': '450px',
    margin: '0 auto',
  }
})

function SimpleAppBar(props) {
  const classes = props.classes
  return (
    <div className={classes.root}>
      <div className={classes.paper}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.container}>
          <Typography type="title" color="inherit">
            Sign Up
          </Typography>
            <TextField
            id="name"
            label="Login"
            className={classes.input}
            onChange={event => this.setState({ name: event.target.value })}
            marginForm
            />
            <TextField
             id="password"
             label="Password"
             className={classes.input}
             type="password"
             marginForm
           />
          <Button raised color="primary" className={classes.button}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
    </div>
  )
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(SimpleAppBar)
