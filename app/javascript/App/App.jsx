import React from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { history } from '../_helpers'
import { alertActions } from '../_actions'
import { PrivateRoute } from '../_components'
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'

class App extends React.Component {
  constructor(props) {
    super(props)

    const { dispatch } = this.props
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear())
    })
  }

  render() {
    const { alert } = this.props
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">SPA</span>
        </nav>
        <div className="container">
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <Router history={history}>
            <React.Fragment>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
            </React.Fragment>
          </Router>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  const { alert } = state
  return {
    alert
  }
}

const connectedApp = connect(mapStateToProps)(App)
export { connectedApp as App }
