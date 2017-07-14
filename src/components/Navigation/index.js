import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import BottomNavigation, { BottomNavigationButton }
  from 'material-ui/BottomNavigation'
import SearchIcon from 'material-ui-icons/Search'
import MenuIcon from 'material-ui-icons/Menu'
import AddCircle from 'material-ui-icons/AddCircle'
import Menu from './Menu'
import Search from './Search'
import { NavLink } from 'react-router-dom'

const styleSheet = createStyleSheet('SimpleBottomNavigation', {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
})

class SimpleBottomNavigation extends Component {
  constructor(props){
    super(props)

    this.state = {
      menu: false,
      search: false,
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    selectNote: PropTypes.func.isRequired,
  }

  handleMenuDrawer = () => {
    let menu = this.state.menu
    this.setState({
      menu: !menu
    })
  }

  handleSearchDrawer = () => {
    let search = this.state.search
    this.setState({
      search: !search
    })
  }

  handleSearchInput = (filter) => {
    this.props.selectNote(filter)
  }

  render() {
    const classes = this.props.classes

    return (
      <div className={classes.root}>
        <BottomNavigation showLabels>
          <BottomNavigationButton label="Search"
            icon={<SearchIcon />} onClick={this.handleSearchDrawer} />
            <BottomNavigationButton
              icon={<NavLink to={`/edit/new`}><AddCircle/></NavLink>}
              label={"New"}
            />
          <BottomNavigationButton label="Menu"
            icon={<MenuIcon />} onClick={this.handleMenuDrawer}/>
        </BottomNavigation>

        <Menu menu={this.state.menu}
          handleMenuDrawer={this.handleMenuDrawer}/>
        <Search search={this.state.search}
          handleSearchDrawer={this.handleSearchDrawer}
          handleSearchInput={this.handleSearchInput}/>
      </div>
    )
  }
}

export default withStyles(styleSheet)(SimpleBottomNavigation)
