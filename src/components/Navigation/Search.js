import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyles } from '@material-ui/styles'
import Drawer from '@material-ui/core/Drawer'
import Input from '@material-ui/core/Input/Input'

const styleSheet = theme =>
  createStyles({
    listFull: {
      width: 'auto',
      flex: 'initial'
    }
  })

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSearchDrawer: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired
}

function Search({ classes, search, handleSearchDrawer, handleSearchInput }) {
  return (
    <Drawer
      anchor="bottom"
      open={search}
      onClose={handleSearchDrawer}
      onClick={handleSearchDrawer}
    >
      <Input
        placeholder="Search"
        autoFocus
        onKeyPress={e => {
          e.key === 'Enter' && handleSearchDrawer()
        }}
        className={classes.input}
        onChange={e => handleSearchInput(e.target.value)}
      />
    </Drawer>
  )
}

export default withStyles(styleSheet)(Search)
