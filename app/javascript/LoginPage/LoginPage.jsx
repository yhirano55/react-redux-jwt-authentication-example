import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    // reset login status
    this.props.dispatch(userActions.logout())

    this.state = {
      username: '',
      password: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { username, password } = this.state
    const { dispatch } = this.props
    if (username && password) {
      dispatch(userActions.login(username, password))
    }
  }

  render() {
    const { loggingIn } = this.props
    const { username, password, submitted } = this.state
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
          <h1>Login</h1>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
              {submitted && !username &&
                <small className="form-text text-danger">Username is required</small>
              }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
              {submitted && !password &&
                <small className="form-text text-danger">Password is required</small>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Login</button>
              {loggingIn &&
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication
  return {
    loggingIn
  }
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage)
export { connectedLoginPage as LoginPage }
