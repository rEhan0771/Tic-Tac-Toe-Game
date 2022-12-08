import React from "react";
import AddPlayer from "./AddPlayer/AddPlayer";
import ScoreCard from "./card/ScoreCard";
import "./tictactoeContainer.css";
import GameCard from "./tictactoe/index"

export default function TicTacToeContainer() {
  return (
    <div class="container">
      <AddPlayer />
      <div style={{marginTop:20}}>
      <ScoreCard />
      </div>
      <div style={{marginTop:20, marginBottom:20}}>
      <GameCard />
      </div>
    </div>
  );
}
