import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Button from 'material-ui/Button'
import EditIcon from 'material-ui-icons/ModeEdit'
import SaveIcon from 'material-ui-icons/Save'
import ArrowBack from 'material-ui-icons/ArrowBack'
import { NavLink } from 'react-router-dom'

const styleSheet = createStyleSheet('FloatingActionButtons', theme => ({
  main: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '10px',
    right: '10px',
  },
  shifted: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '10px',
    right: '75px',
    width: '45px',
    height: '45px',
  },
}));

class FloatingActionButtons extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    textState: PropTypes.shape({
      note: PropTypes.object.isRequired,
      isNew: PropTypes.bool.isRequired,
      isNoteDisabled: PropTypes.bool.isRequired,
    }).isRequired,
    addNote: PropTypes.func.isRequired,
    updateNote: PropTypes.func.isRequired,

  };

  handleEditButton = () => {
    const { note, isNoteDisabled, isNew } = this.props.textState
    this.props.handleNoteDisabled()

    if (!isNoteDisabled && isNew === false) {
      this.props.updateNote(note)
    } else if (isNew === true) {
      this.props.addNote(note)
      this.props.history.push('/')
    }
  }

  render() {
    const { classes } = this.props
    const { isNoteDisabled } = this.props.textState
    const ButtonIcon = () => isNoteDisabled ? <EditIcon /> : <SaveIcon />

    return (
      <div>
        <Button fab color="accent" className={classes.main}
          onClick={this.handleEditButton}>
          <ButtonIcon/>
        </Button>
        <NavLink to={`/`}>
          <Button fab color="default" className={classes.shifted}>
            <ArrowBack />
          </Button>
        </NavLink>
      </div>
    )
  }
}

export default withStyles(styleSheet)(FloatingActionButtons)
