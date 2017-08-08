import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'


export default class ReminderDialog extends Component {

  static propTypes = {
    reminder: PropTypes.bool.isRequired,
    handleReminderButton: PropTypes.func.isRequired,
  }

  render() {
    const {handleReminderButton, reminder} = this.props
    const date = new Date().toISOString().substring(0, 16)
    const isReminder = false

    return (
      <Dialog open={reminder} onRequestClose={handleReminderButton}>
        <DialogTitle>
          {"Reminder"}
        </DialogTitle>
        <DialogContent>
          <TextField
            id="date"
            label="On date"
            type="datetime-local"
            defaultValue={date}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleReminderButton}
            disabled={isReminder}
            color="default"
            >
            Set
          </Button>
          <Button
            onClick={handleReminderButton}
            disabled={!isReminder}
            color="default"
            >
            Remove
          </Button>
          <Button onClick={handleReminderButton} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
