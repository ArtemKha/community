import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Button from 'material-ui/Button'
import EditIcon from 'material-ui-icons/ModeEdit'
import SaveIcon from 'material-ui-icons/Save'
import ArrowBack from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'

const styleSheet = createStyleSheet('FloatingActionButtons', theme => ({
  main: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '2%',
    right: '10px',
  },
  shifted: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '2%',
    right: '130px',
    width: '45px',
    height: '45px',
  },
  del: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '2%',
    right: '75px',
    width: '45px',
    height: '45px',
  },
}));

const FloatingActionButtons = (props) => {
  const {classes, toList, changeActive, removeNote} = props
  let editIcon = props.disabled ? <EditIcon /> : <SaveIcon />
  return (
    <div>
      <Button fab color="accent" className={classes.main} onClick={changeActive}>
        {editIcon}
      </Button>
      <Button fab color="default" className={classes.shifted} onClick={toList}>
        <ArrowBack />
      </Button>
      <Button fab color="default" className={classes.del} onClick={removeNote}>
        <DeleteIcon />
      </Button>
    </div>
  )
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  changeActive: PropTypes.func.isRequired,
  toList: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(FloatingActionButtons)
