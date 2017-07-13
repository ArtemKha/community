import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import InboxIcon from 'material-ui-icons/Inbox'
import StarIcon from 'material-ui-icons/Star'
import DeleteIcon from 'material-ui-icons/Delete'
import ReportIcon from 'material-ui-icons/Report'

const styleSheet = createStyleSheet('Menu', {
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
})

class Menu extends Component {
  state = {
    open: {
      bottom: false,
    },
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleMenuDrawer: PropTypes.func.isRequired,
    menu: PropTypes.bool.isRequired,
  }

  render() {
    const {classes, menu, handleMenuDrawer} = this.props
    const mailFolderListItems = (
      <div>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Box" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
      </div>
    )

    const otherMailFolderListItems = (
      <div>
        <ListItem button>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Info" />
        </ListItem>
      </div>
    )

    const fullList = (
      <div>
        <List className={classes.listFull} disablePadding>
          {mailFolderListItems}
        </List>
        <Divider />
        <List className={classes.listFull} disablePadding>
          {otherMailFolderListItems}
        </List>
      </div>
    )

    return (
      <div>
        <Drawer
          anchor="bottom"
          open={menu}
          onRequestClose={handleMenuDrawer}
          onClick={handleMenuDrawer}
        >
          {fullList}
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styleSheet)(Menu)
