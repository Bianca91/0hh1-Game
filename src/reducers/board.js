// The default export for a reducer is the reducer function, that takes 2
// // arguments:
// //
// //   - the (current) state, should default to the initial state
// //   - an action Object:
// //     - type : the action type
// //     - payload : [optional] payload
// //
// export default function(state = [], action = {}) {
//   // based on the action type we will return a new state
//   switch(action.type) {
//     // some actions include a payload that we can use to update the state
//     // in this case the payload will contain a new recipe
//     case 'NEW_GAME' :
//       return [].concat(action.payload)
//
//     // optionally some other cases
//     // ...
//
//     // by default we return the existing state
//     default :
//       return state
//   }
// }

// export default function(state = [], action = {}) {
//   return state
// }
// We will change it slightly to use the new function syntax in ES6,
// and we will use Object destructuring to take the type and payload directly from the action Object:
import { CREATE_GAME } from "../actions/types";

const emptyBoard = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];
export default (state = emptyBoard, { type, payload } = {}) => {
  switch (type) {
    case CREATE_GAME:
      return [].concat(payload.board);

    default:
      return state;
  }
};
