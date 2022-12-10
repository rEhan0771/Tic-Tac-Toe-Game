import React from "react";
import AddPlayer from "../components/AddPlayer/AddPlayer";
import ScoreCard from "../components/card/ScoreCard";
//import "./tictactoeContainer.css";
import GameCard from "../components/tictactoe/index"

export default function TicTacToeContainer() {
  return (
    <div class="container mb-4">
      <div id="addPalyer" class="row align-items-start mt-4">
        <AddPlayer />
        <ScoreCard />
      </div>
      <GameCard />
    </div>
  );
}
