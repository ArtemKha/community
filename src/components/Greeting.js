import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const styleSheet = createStyleSheet('Greeting', {
  button: {
    marginLeft: '10px',
    margin: '0 auto',
  },
  paper: {
    maxWidth: '100%',
    margin: '20px',
    width: 460,
  }
})

function Greeting(props) {
  const { classes, history } = props

  function addNew() {
    history.push('/edit/new')
  }

  return (
    <div className={classes.paper}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.container}>
          <Typography type="subheading" color="inherit">
            Click 'New note' to save your great ideas!
          </Typography>
          <Button raised color="primary" className={classes.button} onClick={addNew}>
            New note
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Greeting.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(Greeting)
