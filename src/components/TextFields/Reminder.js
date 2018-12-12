import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

export default class ReminderDialog extends Component {
  constructor() {
    super()
    const date = new Date().toISOString().substring(0, 16)

    this.state = {
      remind: date
    }
  }

  static propTypes = {
    reminder: PropTypes.bool.isRequired,
    addReminder: PropTypes.func.isRequired,
    handleReminderButton: PropTypes.func.isRequired
  }

  render() {
    const { handleReminderButton, reminder, addReminder } = this.props

    //this feature will be implemented later
    const isReminder = true

    return (
      <Dialog open={reminder} onClose={handleReminderButton}>
        <DialogTitle>{'Reminder'}</DialogTitle>
        <DialogContent>
          <TextField
            id="date"
            label="On date"
            type="datetime-local"
            onChange={e => this.setState({ remind: e.target.value })}
            defaultValue={this.state.remind}
            InputLabelProps={{
              shrink: true
            }}
          />
          <br />
          <small>Reminder will be implemented soon</small>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={remind => addReminder(remind)}
            disabled={isReminder}
            color="default"
          >
            Set
          </Button>
          <Button
            onClick={handleReminderButton}
            disabled={isReminder}
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
