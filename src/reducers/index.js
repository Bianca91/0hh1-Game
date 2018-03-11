//
// export default {
//   board: board
// }
// Object shorthand syntax
// Instead of this:

// export default {
//   board: board
// }
// Write this:

// src/reducers/index.js
import board from "./board";
import sidebar from "./sidebar";
import locked from "./locked";

export default {
  board,
  sidebar,
  locked
};
