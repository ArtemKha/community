import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Button from 'material-ui/Button'
import EditIcon from 'material-ui-icons/ModeEdit'
import SaveIcon from 'material-ui-icons/Save'
import ArrowBack from 'material-ui-icons/ArrowBack'

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

function FloatingActionButtons(props) {
  const {classes, toList, handleEditButton} = props
  let editIcon = props.disabled ? <EditIcon /> : <SaveIcon />

  return (
    <div>
      <Button fab color="accent" className={classes.main} onClick={handleEditButton}>
        {editIcon}
      </Button>
      <Button fab color="default" className={classes.shifted} onClick={toList}>
        <ArrowBack />
      </Button>
    </div>
  )
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleEditButton: PropTypes.func.isRequired,
  toList: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(FloatingActionButtons)
