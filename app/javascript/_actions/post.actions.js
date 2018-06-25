import { postConstants } from '../_constants'
import { postService } from '../_services'
import { alertActions } from './'
import { history } from '../_helpers'

export const postActions = {
  getAll
}

function getAll() {
  return dispatch => {
    dispatch(request())

    postService.getAll()
      .then(
        posts => dispatch(success(posts)),
        error => dispatch(failure(error))
      )
  }

  function request() { return { type: postConstants.GETALL_REQUEST } }
  function success(posts) { return { type: postConstants.GETALL_SUCCESS, posts } }
  function failure(error) { return { type: postConstants.GETALL_FAILURE, error } }
}
