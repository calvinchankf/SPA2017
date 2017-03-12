import {
  INCREMENT,
  DECREMENT
} from '../constants';

const defaultState = 0;

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default counter
