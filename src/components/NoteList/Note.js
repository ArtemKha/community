import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styleSheet = createStyleSheet('ListDividers', theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    background: theme.palette.background.paper,
  },
}));

function ListDividers(props) {
  const classes = props.classes;
  const { title, text } = props.note;

  const showTitle = title.slice(0, 40);
  const showText = text.slice(0, 80) + '...';

  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemText primary={showTitle} secondary={showText}/>
      </ListItem>
      <Divider light />
    </List>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
  note: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(ListDividers);