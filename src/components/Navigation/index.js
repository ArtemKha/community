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

const styleSheet = createStyleSheet('SimpleBottomNavigation', {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 1,
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
    history: PropTypes.object.isRequired,
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

  handleSearchInput = (filter) => {
    this.props.selectNote(filter)
  }

  handleNewButton = () => {
    this.props.history.push('/edit/new')
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <BottomNavigation showLabels>
          <BottomNavigationButton label="Search"
            icon={<SearchIcon />} onClick={this.handleSearchDrawer} />
            <BottomNavigationButton label={"New"}
              icon={<AddCircle/>} onClick={this.handleNewButton}/>
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
