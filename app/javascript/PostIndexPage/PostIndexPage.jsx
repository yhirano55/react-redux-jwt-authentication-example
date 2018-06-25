import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { postActions } from '../_actions'

class PostIndexPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(postActions.getAll())
  }

  render() {
    const { posts } = this.props
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <h1>This is PostIndexPage</h1>
          <p>You are logged in with React & JWT!!</p>
          <p><Link to="/login" className="btn btn-primary btn-block">Logout</Link></p>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><strong>Posts</strong></li>
          </ul>
          <hr />
          <h3>Posts from secure api end point:</h3>
          {posts.loading && <em>Loading posts...</em>}
          {posts.error && <span className="text-danger">ERROR: {posts.error}</span>}
          {posts.items && posts.items.data.map((post, index) =>
            <div className="card mb-2" key={post.id}>
              <div className="card-header">ID: {post.id}</div>
              <div className="card-body">
                <h5 className="card-title">{post.attributes.title}</h5>
                <p className="card-text">{post.attributes.body}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { posts } = state
  return {
    posts
  }
}

const connectedPostIndexPage = connect(mapStateToProps)(PostIndexPage)
export { connectedPostIndexPage as PostIndexPage }
