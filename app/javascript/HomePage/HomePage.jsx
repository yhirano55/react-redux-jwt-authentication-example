import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => (
  <div className="row justify-content-center">
    <div className="col-6">
      <h1>This is HomePage</h1>
      <p>You are logged in with React & JWT!!</p>
      <p><Link to="/login" className="btn btn-primary btn-block">Logout</Link></p>
      <ul>
        <li><strong>Home</strong></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
      <hr />
      <h3>Welcome:</h3>
      <p>Hello World.</p>
    </div>
  </div>
)
