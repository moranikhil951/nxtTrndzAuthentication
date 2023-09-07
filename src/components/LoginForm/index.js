// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  submitFrom = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)

    if (response.ok === true) {
      this.onResponse()
    } else {
      this.setState({
        errorMsg: data.error_msg,
        showErrorMsg: true,
      })
    }
  }

  onResponse = () => {
    const {history} = this.props
    history.replace('/')
  }

  UsernameInput = event => {
    this.setState({username: event.target.value})
  }

  passwordInput = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg, showErrorMsg} = this.state
    return (
      <div className="login-container">
        <div className="inner-con">
          <div className="img-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
              alt=" website logo"
              className="website-logo-small"
            />
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login"
          />
          <form className="form-container" onSubmit={this.submitFrom}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
              alt=" website logo"
              className="website-logo"
            />
            <br />
            <label htmlFor="userInputId" className="label-name">
              USERNAME
            </label>
            <br />
            <input
              onChange={this.UsernameInput}
              className="input"
              type="text"
              id="userInputId"
              placeholder="Username"
              value={username}
            />
            <br />
            <label htmlFor="passwordInputId" className="label-name">
              PASSWORD
            </label>
            <br />
            <input
              onChange={this.passwordInput}
              className="input"
              type="password"
              id="passwordInputId"
              placeholder="Password"
              value={password}
            />
            <br />
            <button type="submit" className="button">
              Login
            </button>
            {showErrorMsg && <p className="unvalid">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
