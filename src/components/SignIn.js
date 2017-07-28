import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FlexBox, linkStyle } from './_styledComponents'

import { withStyles, createStyleSheet } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const styleSheet = createStyleSheet('SignIn', {
  root: {
    'max-width': '90%',
    marginTop: '10%',
    margin: '0 auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    'min-height': '250px',
    padding: 30,
  },
  button: {
   marginTop: '10px',
  },
  input: {
    width: '100%',
  },
  paper: {
    'max-width': '450px',
    margin: '0 auto',
  },
  typo: {
    marginLeft: '10px',
    marginTop: '10px',
  }
})

class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      error: {
        message: '',
      }
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
  }

  signIn = () => {
    const {email, password} = this.state
    this.props.signIn(email, password)
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentWillReceiveProps(nextProps) {
    nextProps.user && this.props.history.push('/')
  }

  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <div className={classes.paper}>
          <AppBar position="static" color="default">
            <Toolbar className={classes.container}>
              <Typography type="title" color="inherit">
                Sign In
              </Typography>
                <TextField
                name="email"
                label="E-mail"
                className={classes.input}
                onChange={this.handleInputChange}
                marginForm
                />
                <TextField
                 name="password"
                 label="Password"
                 className={classes.input}
                 onChange={this.handleInputChange}
                 type="password"
                 marginForm
               />
               <Typography type="body1" color="inherit">
                 {this.props.error.message}
               </Typography>
               <FlexBox>
                <Button
                  raised
                  color="primary"
                  className={classes.button}
                  onClick={this.signIn}
                >
                  Sign In
                </Button>
                <Typography type="body1" color="inherit" className={classes.typo}>
                  Don't have an account? <br />
                  <Link to={'/signup'} style={linkStyle}> Create a free account</Link>
                </Typography>
              </FlexBox>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    )
  }
}

export default withStyles(styleSheet)(SignIn)
