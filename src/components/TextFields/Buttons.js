import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { NavLink } from 'react-router-dom'

const styleSheet = theme =>
  createStyles({
    main: {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      transition: 'bottom 0.5s'
    },
    shifted: {
      position: 'fixed',
      bottom: '10px',
      right: '75px',
      width: '45px',
      height: '45px',
      transition: 'bottom 0.5s'
    },
    hide: {
      bottom: '-80px'
    }
  })

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSaveButton: PropTypes.func.isRequired,
  isNoteDisabled: PropTypes.bool.isRequired
}

function Buttons({ classes, isNoteDisabled, handleSaveButton }) {
  const hiddenClass = !isNoteDisabled && classes.hide

  return (
    <div>
      <Fab
        className={classes.main + ` ${hiddenClass}`}
        onClick={handleSaveButton}
      >
        <EditIcon />
      </Fab>
      <NavLink to={`/notes`}>
        <Fab color="default" className={classes.shifted + ` ${hiddenClass}`}>
          <ArrowBack />
        </Fab>
      </NavLink>
    </div>
  )
}

export default withStyles(styleSheet)(Buttons)
