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
import EditIcon from 'material-ui-icons/ModeEdit'
import ArrowBack from 'material-ui-icons/ArrowBack'
import { MobileHiddenBox } from '../_styledComponents'

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
  const { classes, removeNote, handleEditButton, isNew, isNoteDisabled } = props
  const ButtonIcon = () => isNoteDisabled ? <EditIcon /> : <SaveIcon />
  const DeleteButton = () => isNew ? <div></div> :
    <div>
      <IconButton color="default" aria-label="Info">
        <InfoIcon />
      </IconButton>
      <IconButton color="default" aria-label="Delete" onClick={removeNote}>
        <DeleteIcon />
      </IconButton>
    </div>

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className={classes.bar}>
        <Toolbar>
          <IconButton color="default" aria-label="Menu">
            <AlarmIcon />
          </IconButton>
          <DeleteButton />
          <MobileHiddenBox>
            <IconButton color="default" aria-label="Delete" onClick={handleEditButton}>
              <ButtonIcon />
            </IconButton>
          </MobileHiddenBox>
        </Toolbar>
      </AppBar>
    </div>
  )
}

SimpleAppBar.propTypes = {
  isNew: PropTypes.bool.isRequired,
  isNoteDisabled: PropTypes.bool.isRequired,
  handleEditButton: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(SimpleAppBar)
