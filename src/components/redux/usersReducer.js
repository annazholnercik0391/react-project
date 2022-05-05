import { usersAPI } from "../../api/api";
const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
}
const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case SUBSCRIBE:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, subscribed: true }
          }
          return u
        })
      }
    case UNSUBSCRIBE:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, subscribed: false }
          }
          return u
        })
      }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state
  }
}
export const subscribeSuccess = (userId) => ({ type: SUBSCRIBE, userId })
export const unsubscribeSuccess = (userId) => ({ type: UNSUBSCRIBE, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}

export const subscribe = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.subscribe(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(subscribeSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
      })
  }
}

export const unsubscribe = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unsubscribe(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unsubscribeSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
      })

  }
}
export default usersReducer