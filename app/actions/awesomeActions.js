import * as types from './actionTypes';
export const SIGN_IN = 'SIGN_IN';
export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

export function signIn(){
  return {
    type: SIGN_IN, text };
}
