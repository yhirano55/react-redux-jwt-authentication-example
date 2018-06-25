import { postConstants } from '../_constants'

export function posts(state = {}, action) {
  switch (action.type) {
    case postConstants.GETALL_REQUEST:
      return {
        loading: true
      }
    case postConstants.GETALL_SUCCESS:
      return {
        items: action.posts
      }
    case postConstants.GETALL_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}
