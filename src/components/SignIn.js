import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FlexBox, linkStyle, BgSigning } from './_styledComponents'
import { auth, googleAuthProvider } from '../firebase'

import { withStyles, createStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import icon_google from '../assets/icon_google.png'
import Title from './shared/Title'

const styleSheet = theme =>
  createStyles({
    root: {
      'max-width': '90%',
      margin: '0 auto',
      paddingTop: '10%'
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: 'auto',
      padding: 30
    },
    button: {
      marginTop: '10px',
      padding: '10px 30px'
    },
    input: {
      width: '100%'
    },
    paper: {
      'max-width': '450px',
      margin: '0 auto'
    },
    typo: {
      marginLeft: '10px',
      marginTop: '10px'
    },
    error: {
      color: 'tomato'
    },
    googleProviderImg: {
      height: '30px',
      marginLeft: 'auto'
    }
  })

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
    user: PropTypes.object
  }

  signIn = () => {
    const { email, password } = this.state
    this.props.signIn(email, password)
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentWillMount() {
    this.props.user && this.props.history.push('/notes')
  }

  componentWillReceiveProps(nextProps) {
    nextProps.user && this.props.history.push('/notes')
    nextProps.auth.message && this.setState({ error: nextProps.auth.message })
  }

  render() {
    const classes = this.props.classes
    const signing = this.props.auth.signing

    return (
      <div className={classes.root}>
        <Title />
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
              />
              <TextField
                name="password"
                label="Password"
                className={classes.input}
                onChange={this.handleInputChange}
                type="password"
              />
              <Typography type="body1" className={classes.error}>
                {this.state.error}
              </Typography>
              <FlexBox>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.signIn}
                  disabled={signing}
                >
                  Sign In
                </Button>
                <Typography
                  type="body1"
                  color="inherit"
                  className={classes.typo}
                >
                  Don't have an account? <br />
                  <Link to={'/signup'} style={linkStyle}>
                    {' '}
                    Create a free account
                  </Link>
                </Typography>
              </FlexBox>
            </Toolbar>
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => auth.signInWithPopup(googleAuthProvider)}
            >
              Sign In with google
              <img
                src={icon_google}
                className={classes.googleProviderImg}
                alt="google"
              />
            </Button>
          </AppBar>
        </div>
      </div>
    )
  }
}

export default withStyles(styleSheet)(SignIn)
