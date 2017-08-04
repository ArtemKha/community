import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'

AlertDialog.propTypes = {
  info: PropTypes.bool.isRequired,
  handleInfoButton: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
}

export default function AlertDialog({handleInfoButton, info, note}) {
  return (
    <div>
      <Dialog open={info} onRequestClose={handleInfoButton}>
        <DialogTitle>
          {"Info"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span>Created: {note.created}</span><br />
            <span>Updated: {note.updated}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInfoButton} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
