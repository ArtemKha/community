import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation'
import SearchIcon from 'material-ui-icons/Search'
import MenuIcon from 'material-ui-icons/Menu'
import AddCircle from 'material-ui-icons/AddCircle'
import Drawer from './Drawer'

const styleSheet = createStyleSheet('SimpleBottomNavigation', {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
})

class SimpleBottomNavigation extends Component {
  state = {
    index: -1,
    drawer: false,
  }

  handleChange = (event, index) => {
    this.setState({ index })
  }

  showDrawer = () => {
    let drawer = this.state.drawer
    this.setState({
      drawer: !drawer
    })
  }

  render() {
    const classes = this.props.classes
    const { index } = this.state
    return (
      <div className={classes.root}>
        <BottomNavigation index={index} onChange={this.handleChange} showLabels>
          <BottomNavigationButton label="Search" icon={<SearchIcon />} />
          <BottomNavigationButton label="New" icon={<AddCircle />} />
          <BottomNavigationButton label="Menu" icon={<MenuIcon />} onClick={this.showDrawer}/>
        </BottomNavigation>
        <Drawer drawer={this.state.drawer} showDrawer={this.showDrawer}/>
      </div>
    )
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(SimpleBottomNavigation)
