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
  constructor(props){
    super(props)

    this.state = {
      index: -1,
      drawer: false,
      search: false,
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  handleChange = (event, index) => {
    this.setState({ index })
  }

  openFields = () => {
    this.props.history.push('/edit/new')
  }

  showDrawer = () => {
    let drawer = this.state.drawer
    this.setState({
      drawer: !drawer
    })
  }

  showSearch = () => {
    let search = this.state.search
    this.setState({
      search: !search
    })
  }

  render() {
    const classes = this.props.classes
    const { index } = this.state

    return (
      <div className={classes.root}>
        <BottomNavigation index={index} onChange={this.handleChange} showLabels>
          <BottomNavigationButton label="Search" icon={<SearchIcon />} />
          <BottomNavigationButton label="New" icon={<AddCircle />} onClick={this.openFields}/>
          <BottomNavigationButton label="Menu" icon={<MenuIcon />} onClick={this.showDrawer}/>
        </BottomNavigation>
        <Drawer drawer={this.state.drawer} showDrawer={this.showDrawer}/>
      </div>
    )
  }
}

export default withStyles(styleSheet)(SimpleBottomNavigation)
