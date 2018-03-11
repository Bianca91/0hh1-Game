import React from "react";
import { shallow } from "enzyme";
import { board } from "./Board.js";

const emptyBoard = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

describe("<Board />", () => {
  const board = shallow(
    <board board={emptyBoard} dupeRows={[]} dupeCols={[]} />
  );
  it("renders a div with class Board", () => {
    expect(board).toHaveTagName("board");
  });
});
