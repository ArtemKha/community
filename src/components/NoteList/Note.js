import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyles } from '@material-ui/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styleSheet = theme =>
  createStyles({
    root: {
      width: '100%',
      overflow: 'hidden'
    }
  })

Note.propTypes = {
  classes: PropTypes.object.isRequired,
  note: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

function Note({ classes, note, history }) {
  let { title, text, id } = note
  const showTitle = title.slice(0, 40)
  const showText = text.slice(0, 80) + '...'

  function toNote() {
    history.push(`/notes/${id}`)
  }

  return (
    <List className={classes.root} onClick={toNote}>
      <ListItem button>
        <ListItemText primary={showTitle} secondary={showText} />
      </ListItem>
    </List>
  )
}

export default withStyles(styleSheet)(Note)
