import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const styleSheet = createStyleSheet('ListDividers', theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    background: theme.palette.background.paper,
  },
}))

function ListDividers(props) {
  const { classes } = props
  const { title, text, id } = props.note

  const showTitle = title.slice(0, 40)
  const showText = text.slice(0, 80) + '...'

  const showEdit = () => {
    let path = `edit/${id}`
    props.history.push(path)
  }

  return (
    <List className={classes.root}>
      <ListItem button onClick={showEdit}>
        <ListItemText primary={showTitle} secondary={showText} />
      </ListItem>
      <Divider light />
    </List>
  )
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
  note: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(ListDividers)
