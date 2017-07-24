import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Button from 'material-ui/Button'
import EditIcon from 'material-ui-icons/ModeEdit'
import ArrowBack from 'material-ui-icons/ArrowBack'
import { NavLink } from 'react-router-dom'

const styleSheet = createStyleSheet('Buttons', theme => ({
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
}))

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
  handleEditButton: PropTypes.func.isRequired,
  isNoteDisabled: PropTypes.bool.isRequired,
}

function Buttons({ classes, isNoteDisabled, handleEditButton }) {
  const Buttons = () => isNoteDisabled &&
    <div>
      <Button fab color="accent" className={classes.main}
        onClick={handleEditButton}>
        <EditIcon />
      </Button>
      <NavLink to={`/`}>
        <Button fab color="default" className={classes.shifted}>
          <ArrowBack />
        </Button>
      </NavLink>
    </div>

  return (
    <Buttons />
  )
}

export default withStyles(styleSheet)(Buttons)
