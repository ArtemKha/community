import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Input from 'material-ui/Input/Input'

const styleSheet = createStyleSheet('Search',theme => ({
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
  input: {
    margin: theme.spacing.unit,
  },
}))

class Search extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleSearchDrawer: PropTypes.func.isRequired,
    search: PropTypes.bool.isRequired,
  }

  render() {
    const {classes, search, handleSearchDrawer, handleSearchInput} = this.props

    return (
      <div>
        <Drawer
          anchor="bottom"
          open={search}
          onRequestClose={handleSearchDrawer}
          onClick={handleSearchDrawer}
        >
          <Input placeholder="Search" autoFocus className={classes.input}
            onChange={e => handleSearchInput(e.target.value)} />
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styleSheet)(Search)
