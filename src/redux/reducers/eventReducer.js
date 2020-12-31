import { actionTypes } from '../actions/actionTypes';

const initialState = {
  events: [],
  currentDay: {

  }
}

export default function(state = initialState, action) {
  switch (action.type) {
      case actionTypes.INIT_EVENTS:
          const { events }  = action.payload;
          console.log('E', events)
          return {
            ...state,
            events: events
          };
          break;
      default:
          return state;
  }
}