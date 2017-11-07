import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import EditIcon from 'material-ui-icons/ModeEdit'
import ArrowBack from 'material-ui-icons/ArrowBack'
import { NavLink } from 'react-router-dom'

const styleSheet = theme => ({
  main: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    transition: 'bottom 0.5s',
  },
  shifted: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '10px',
    right: '75px',
    width: '45px',
    height: '45px',
    transition: 'bottom 0.5s',
  },
  hide: {
    bottom: '-80px',
  }
})

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSaveButton: PropTypes.func.isRequired,
  isNoteDisabled: PropTypes.bool.isRequired,
} 

function Buttons({ classes, isNoteDisabled, handleSaveButton }) {
  const hiddenClass = !isNoteDisabled && classes.hide

  return (
    <div>
      <Button fab color="accent" className={classes.main + ` ${hiddenClass}`}
        onClick={handleSaveButton}>
        <EditIcon />
      </Button>
      <NavLink to={`/notes`}>
        <Button fab color="default" className={classes.shifted + ` ${hiddenClass}`}>
          <ArrowBack />
        </Button>
      </NavLink>
    </div>
  )
}

export default withStyles(styleSheet)(Buttons)
