import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions, postActions } from '../_actions'

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll())
    this.props.dispatch(postActions.getAll())
  }

  handleDeleteUser(id) {
    return (e) => this.props.dispatch(userActions.delete(id))
  }

  render() {
    const { user, users, posts } = this.props
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <h1>Hi {user.username}!</h1>
          <p>You are logged in with React & JWT!!</p>
          <p>
            <Link to="/login" className="btn btn-primary btn-block">Logout</Link>
          </p>

          <h3>Users from secure api end point:</h3>
          {users.loading && <em>Loading users...</em>}
          {users.error && <span className="text-danger">ERROR: {users.error}</span>}
          {users.items &&
            <section>
              {users.items.data.map((user, index) =>
                <ul key={user.id}>
                  <li>{user.id}</li>
                  <li>{user.attributes.username}</li>
                  <li>{user.attributes.email}</li>
                </ul>
              )}
            </section>
          }

          <h3>Posts from secure api end point:</h3>
          {posts.loading && <em>Loading posts...</em>}
          {posts.error && <span className="text-danger">ERROR: {posts.error}</span>}
          {posts.items &&
            <section>
              {posts.items.data.map((post, index) =>
                <ul key={post.id}>
                  <li>{post.id}</li>
                  <li>{post.attributes.title}</li>
                  <li>{post.attributes.body}</li>
                </ul>
              )}
            </section>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users, posts, authentication } = state
  const { user } = authentication
  return {
    user,
    users,
    posts,
  }
}

const connectedHomePage = connect(mapStateToProps)(HomePage)
export { connectedHomePage as HomePage }
