import {
  INCREMENT,
  DECREMENT
} from '../constants';

export const increment = () => ({
  type: INCREMENT,
  payload: {}
});

export const decrement = () => ({
  type: DECREMENT,
  payload: {}
});
