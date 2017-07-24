import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { AnimatedBox } from './_styledComponents'

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

Greeting.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

function Greeting({ classes, history }) {

  const addNew = () => {
    history.push('/edit/new')
  }

  return (
    <div className={classes.paper}>
      <AnimatedBox>
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
    </AnimatedBox>
    </div>
  )
}

export default withStyles(styleSheet)(Greeting)
