import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles, createStyles } from '@material-ui/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'
import OutIcon from '@material-ui/icons/SystemUpdate'

const styleSheet = createStyles({
  listFull: {
    width: 'auto',
    flex: 'initial'
  }
})

class Menu extends Component {
  state = {
    open: {
      bottom: false
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleMenuDrawer: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    menu: PropTypes.bool.isRequired
  }

  render() {
    const { classes, menu, handleMenuDrawer } = this.props
    const mailFolderListItems = (
      <div>
        <Link to="/notes">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
        <ListItem button onClick={this.props.signOut}>
          <ListItemIcon>
            <OutIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
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
          onClose={handleMenuDrawer}
          onClick={handleMenuDrawer}
        >
          {fullList}
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styleSheet)(Menu)
