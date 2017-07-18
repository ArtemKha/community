import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { NavLink } from 'react-router-dom'

const styleSheet = createStyleSheet('ListDividers', theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
}))

const linkStyle = {'textDecoration': 'none'}

const ListDividers = props => {
  const { classes } = props
  const { title, text, id } = props.note

  const showTitle = title.slice(0, 40)
  const showText = text.slice(0, 80) + '...'

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

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
  note: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(ListDividers)
