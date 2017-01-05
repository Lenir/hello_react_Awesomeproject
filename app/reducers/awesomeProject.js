import * as types from '../actions/actionTypes';

const initialState = {
  count: 0,
  name: 'NAME!',
  company: 'COMPANY!',
  id: 'ID!',
  team: 'TEAM!',
  avatarSource: require('../../img/avatar.png')
};

export default function awsomeApp(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
