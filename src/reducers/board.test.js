import board from './board'

describe('board reducer', () => {
  const reducer = board
  const emptyBoard = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
  ]

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(emptyBoard)
  })
})
