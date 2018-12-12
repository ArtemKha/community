import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'

AlertDialog.propTypes = {
  info: PropTypes.bool.isRequired,
  handleInfoButton: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired
}

export default function AlertDialog({ handleInfoButton, info, note }) {
  return (
    <Dialog open={info} onClose={handleInfoButton}>
      <DialogTitle>{'Info'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <span>Created: {note.created}</span>
          <br />
          <span>Updated: {note.updated}</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleInfoButton} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
