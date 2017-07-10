import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Button from 'material-ui/Button'
import EditIcon from 'material-ui-icons/ModeEdit'
import SaveIcon from 'material-ui-icons/Save'

const styleSheet = createStyleSheet('FloatingActionButtons', theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '2%',
    right: '2%',
}}));

function FloatingActionButtons(props) {
  const classes = props.classes
  let editIcon = props.disabled ? <EditIcon /> : <SaveIcon />

  return (
    <div>
      <Button fab color="primary" className={classes.button} onClick={props.changeActive}>
        {editIcon}
      </Button>
    </div>
  )
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  changeActive: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(FloatingActionButtons)
