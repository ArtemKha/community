import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { NavLink } from 'react-router-dom'
import { linkStyle } from '../_styledComponents'

const styleSheet = createStyleSheet('Note', theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
    overflow: 'hidden',
  },
}))

Note.propTypes = {
  classes: PropTypes.object.isRequired,
  note: PropTypes.object.isRequired,
}

function Note({ classes, note }) {
  let { title, text, id } = note

  const showTitle = title.slice(0, 40)
  const showText = text.slice(0, 80) + '...'

  return (
    <List className={classes.root}>
      <NavLink to={`/note/${id}`} style={linkStyle}>
        <ListItem button>
          <ListItemText primary={showTitle} secondary={showText} />
        </ListItem>
    </NavLink>
    </List>
  )
}

export default withStyles(styleSheet)(Note)
