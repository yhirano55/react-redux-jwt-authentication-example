import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'

class UserIndexPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll())
  }

  render() {
    const { users } = this.props
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <h1>This is UserIndexPage</h1>
          <p>You are logged in with React & JWT!!</p>
          <p><Link to="/login" className="btn btn-primary btn-block">Logout</Link></p>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><strong>Users</strong></li>
            <li><Link to="/posts">Posts</Link></li>
          </ul>
          <hr />

          <h3>Users from secure api end point:</h3>
          {users.loading && <em>Loading users...</em>}
          {users.error && <span className="text-danger">ERROR: {users.error}</span>}
          {users.items && users.items.data.map((user, index) =>
            <div className="card mb-2" key={user.id}>
              <div className="card-header">ID: {user.id}</div>
              <div className="card-body">
                <h5 className="card-title">{user.attributes.username}</h5>
                <p className="card-text">{user.attributes.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users } = state
  return {
    users
  }
}

const connectedUserIndexPage = connect(mapStateToProps)(UserIndexPage)
export { connectedUserIndexPage as UserIndexPage }
