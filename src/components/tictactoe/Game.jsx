import React from "react";
import "./style.css";
import Winner from "./Winner";

function getStatus(squares, xIsNext) {
  const winner = Winner(squares);
  if (winner) {
    return `Winner: ${winner}`;
  } else if (squares.every(Boolean)) {
    return `Scratch: Cat's game`;
  } else {
    return `Next player: ${xIsNext ? "X" : "0"}`;
  }
}

// function playerStatus(xIsNext) {
//   return `Next player: ${xIsNext ? "X" : "0"}`;
// }
function gameReducer(state, action) {
  const { squares, xIsNext } = state;
  switch (action.type) {
    case "SELECT_SQUARE": {
      const { square } = action;
      const winner = Winner(squares);
      if (winner || squares[square]) {
        return state;
      }
      const squaresCopy = [...squares];
      squaresCopy[square] = xIsNext ? "X" : "0";
      return {
        squares: squaresCopy,
        xIsNext: !xIsNext
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}. Please fix it. Thank you.`);
    }
  }
}

function Board({onBoardClick}) {
  const [state, dispatch] = React.useReducer(gameReducer, {
    squares: Array(9).fill(null),
    xIsNext: true
  });
  const { squares, xIsNext } = state;

  function renderSquare(index) {
    return (
      <button className="square" onClick={() => {
        selectSquare(index)
        if(!squares[index]) {
        onBoardClick();
        }
        }}>
        {squares[index]}
      </button>
    );
  }

  function selectSquare(square) {
    dispatch({ type: "SELECT_SQUARE", square });
  }

  const status = getStatus(squares, xIsNext);

  return (
    <div>
      {/* <div className="status">{status}</div> */}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game({onBoardClick}) {
  return (
    <div className="game">
      <Board onBoardClick={onBoardClick}/>
    </div>
  );
}

export default Game;
