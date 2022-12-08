import React from "react";
import ImageCircle from "../shareComponent/ImageCircle";
import Game from "./Game";
import "./style.css";

const GameCard = () => {
  return (
    <div className="game-container">
      <Game />
      <div>
      <p style={{fontSize:14, marginTop:20}}>Time Watch: 00:12:43</p>
      <div style={{display:'flex'}}>
        <ImageCircle />
        <p className="text-player">Anand Rathi - Your turn</p>
      </div>
      </div>
    </div>
  );
};

export default GameCard;
