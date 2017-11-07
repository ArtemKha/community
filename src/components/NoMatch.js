import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { AnimatedBox } from './_styledComponents'

const styleSheet = () => ({
  button: {
    marginLeft: 'auto',
    margin: '0 auto',
  },
  paper: {
    maxWidth: '100%',
    margin: '0 auto',
    marginTop: '10%',
    width: 460,
  }
})

NoMatch.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

function NoMatch ({ classes, history })  {

  const toHome = () => {
    history.push('/notes')
  }

  return (
    <div className={classes.paper}>
      <AnimatedBox>
      <AppBar position="static" color="default">
        <Toolbar className={classes.container}>
          <Typography type="subheading" color="inherit">
            Opps... there is no such thing.
          </Typography>
          <Button raised color="primary" className={classes.button} onClick={toHome}>
            Show notes
          </Button>
        </Toolbar>
      </AppBar>
    </AnimatedBox>
    </div>
  )
}

export default withStyles(styleSheet)(NoMatch)
