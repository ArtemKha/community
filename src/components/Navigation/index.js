import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyles } from '@material-ui/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationButton from '@material-ui/core/BottomNavigationAction'

import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import AddCircle from '@material-ui/icons/AddCircle'
import Menu from './Menu'
import Search from './Search'

const styleSheet = createStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 1
  }
})

class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      menu: false,
      search: false
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    selectNote: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  handleMenuDrawer = () => {
    const menu = this.state.menu
    this.setState({
      menu: !menu
    })
  }

  handleSearchDrawer = () => {
    const search = this.state.search
    this.setState({
      search: !search
    })
  }

  handleSearchInput = filter => {
    this.props.selectNote(filter)
  }

  handleNewButton = () => {
    this.props.history.push('/notes/new')
  }

  render() {
    const classes = this.props.classes

    return (
      <div className={classes.root}>
        <BottomNavigation value={-1}>
          <BottomNavigationButton
            label="Search"
            icon={<SearchIcon />}
            onClick={this.handleSearchDrawer}
          />
          <BottomNavigationButton
            label={'New'}
            icon={<AddCircle />}
            onClick={this.handleNewButton}
          />
          <BottomNavigationButton
            label="Menu"
            icon={<MenuIcon />}
            onClick={this.handleMenuDrawer}
          />
        </BottomNavigation>

        <Menu
          menu={this.state.menu}
          signOut={this.props.signOut}
          handleMenuDrawer={this.handleMenuDrawer}
        />
        <Search
          search={this.state.search}
          handleSearchDrawer={this.handleSearchDrawer}
          handleSearchInput={this.handleSearchInput}
        />
      </div>
    )
  }
}

export default withStyles(styleSheet)(Navigation)
