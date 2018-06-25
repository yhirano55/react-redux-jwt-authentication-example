import config from 'config'
import { authHeader } from '../_helpers'
import { handleResponse } from './user.service'

export const postService = {
  getAll
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${config.apiUrl}/posts`, requestOptions).then(handleResponse)
}
