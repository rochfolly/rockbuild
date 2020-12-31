import { actionTypes } from '../actions/actionTypes'

const initialState = {
    userID: null,
    username: '',
    user: null,
    firebase: null,
    lastLogin: null,
    settings: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.INIT_FIREBASE: {
            const firebaseEntity = action.payload;
            return {
              ...state,
              firebase: firebaseEntity
            };
          }
        case actionTypes.SET_USER: {
            const { user, uid, name, settings }  = action.payload;
            return {
              ...state,
              user: user,
              userID: uid,
              username: name,
              settings: settings
            };
          }
        default:
            return state
    }
}