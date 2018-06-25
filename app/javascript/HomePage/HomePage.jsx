import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll())
  }

  handleDeleteUser(id) {
    return (e) => this.props.dispatch(userActions.delete(id))
  }

  render() {
    const { user, users } = this.props
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <h1>Hi {user.firstName}!</h1>
          <p>You are logged in with React & JWT!!</p>
          <p>
            <Link to="/login" className="btn btn-primary btn-block">Logout</Link>
          </p>
          <h3>Users from secure api end point:</h3>
          {users.loading && <em>Loading users...</em>}
          {users.error && <span className="text-danger">ERROR: {users.error}</span>}
          {users.items &&
            <ul>
              {users.items.map((user, index) =>
                <li key={user.id}>
                  {user.firstName + ' ' + user.lastName}
                </li>
              )}
            </ul>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state
  const { user } = authentication
  return {
    user,
    users
  }
}

const connectedHomePage = connect(mapStateToProps)(HomePage)
export { connectedHomePage as HomePage }
