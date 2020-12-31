import { actionTypes } from './actionTypes'

export const setFirebase = _ => ({
  type: actionTypes.INIT_FIREBASE,
})

export const initToday = _ => ({
  type: actionTypes.INIT_TODAY,
})

export const initEvents = _ => ({
  type: actionTypes.INIT_EVENTS,
})

export const createUserAccount = (name, email, password) => ({
  type: actionTypes.CREATE_USER,
  payload: {name, email, password}
})

export const setCurrentUser = (email, password) => ({
  type: actionTypes.SET_USER,
  payload: {email, password}
})


export const setCriterias = _ => ({
  type: actionTypes.SET_CRITERIAS,
})

export const setEvents = _ => ({
  type: actionTypes.SET_EVENTS,
})

export const setSettings = _ => ({
  type: actionTypes.SET_SETTINGS,
})

