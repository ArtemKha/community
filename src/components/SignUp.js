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

const styleSheet = createStyleSheet('SignUp', {
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
    height: 'auto',
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
  },
  error: {
    color: 'tomato',
  },
})

class SignUp extends Component {
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
    signUp: PropTypes.func.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    nextProps.user && this.props.history.push('/')
  }

  signUp = () => {
    const {email, password} = this.state
    this.props.signUp(email, password)
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const classes = this.props.classes

    return (
      <div className={classes.root}>
        <div className={classes.paper}>
          <AppBar position="static" color="default">
            <Toolbar className={classes.container}>
              <Typography type="title" color="inherit">
                Sign Up
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
               <Typography type="body1" className={classes.error}>
                 {this.props.error.message}
               </Typography>
               <FlexBox>
                <Button
                  raised
                  color="primary"
                  className={classes.button}
                  onClick={this.signUp}
                >
                  Sign Up
                </Button>
                <Typography type="body1" color="inherit" className={classes.typo}>
                  Do you have an account? <br />
                  <Link to={'/signin'} style={linkStyle}>Sign In</Link>
                </Typography>
              </FlexBox>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    )
  }
}

export default withStyles(styleSheet)(SignUp)
