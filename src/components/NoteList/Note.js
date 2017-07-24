import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { NavLink } from 'react-router-dom'

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

  if (title === '') title = text.slice(0, 40)
  const showTitle = title.slice(0, 40)
  const showText = text.slice(0, 80) + '...'
  const linkStyle = {'textDecoration': 'none'}

  return (
    <List className={classes.root}>
      <NavLink to={`/edit/${id}`} style={linkStyle}>
        <ListItem button>
          <ListItemText primary={showTitle} secondary={showText} />
        </ListItem>
    </NavLink>
    </List>
  )
}

export default withStyles(styleSheet)(Note)
