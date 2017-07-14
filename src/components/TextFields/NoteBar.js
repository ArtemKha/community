import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import AlarmIcon from 'material-ui-icons/Alarm'
import InfoIcon from 'material-ui-icons/Info'
import SaveIcon from 'material-ui-icons/Save'

const styleSheet = createStyleSheet('SimpleAppBar', {
  root: {
    marginTop: 30,
    width: '100%',
  },
  bar: {
    'box-shadow': 'none',
  }
})

function SimpleAppBar(props) {
  const { classes, removeNote, isNew } = props
  let deleteButton = isNew ?
    <div>
      <IconButton color="default" aria-label="Save">
        <SaveIcon />
      </IconButton>
    </div> :
    <div>
      <IconButton color="default" aria-label="Info">
        <InfoIcon />
      </IconButton>
      <IconButton color="default" aria-label="Delete">
        <DeleteIcon onClick={removeNote} />
      </IconButton>
    </div>

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className={classes.bar}>
        <Toolbar>
          <IconButton color="default" aria-label="Menu">
            <AlarmIcon />
          </IconButton>
          { deleteButton }
        </Toolbar>
      </AppBar>
    </div>
  )
}

SimpleAppBar.propTypes = {
  isNew: PropTypes.bool.isRequired,
  removeNote: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(SimpleAppBar)
