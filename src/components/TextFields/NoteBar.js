import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import { AlignedRightBox } from '../_styledComponents'
import { NavLink } from 'react-router-dom'

//icons
import DeleteIcon from 'material-ui-icons/Delete'
import NotificationIcon from 'material-ui-icons/Notifications'
import InfoIcon from 'material-ui-icons/Info'
import SaveIcon from 'material-ui-icons/Save'
import EditIcon from 'material-ui-icons/ModeEdit'
import ArrowBack from 'material-ui-icons/ArrowBack'

const styleSheet = createStyleSheet('NoteBar', {
  root: {
    marginTop: 30,
    width: '100%',
  },
  bar: {
    boxShadow: 'none',
  }
})

NoteBar.propTypes = {
  isNew: PropTypes.bool.isRequired,
  isNoteDisabled: PropTypes.bool.isRequired,
  handleEditButton: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

function NoteBar({ classes, removeNote, handleEditButton, isNew, isNoteDisabled }) {

  const EditButtonIcon = () => isNoteDisabled ? <EditIcon /> : <SaveIcon />
  const DeleteButton = () => !isNew &&
    <IconButton color="default" aria-label="Delete" onClick={removeNote}>
      <DeleteIcon />
    </IconButton>

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className={classes.bar}>
        <Toolbar>
          <NavLink to={`/`}>
            <IconButton color="default" aria-label="Delete">
              <ArrowBack />
            </IconButton>
          </NavLink>

          <IconButton
            color="default"
            aria-label="Delete"
            onClick={handleEditButton}>
            <EditButtonIcon />
          </IconButton>

          <AlignedRightBox>
            <DeleteButton />
            <IconButton color="default" aria-label="Menu">
              <NotificationIcon />
            </IconButton>
            <IconButton color="default" aria-label="Info">
              <InfoIcon />
            </IconButton>
          </AlignedRightBox>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styleSheet)(NoteBar)
