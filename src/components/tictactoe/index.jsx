import React from "react";
import Game from "./Game";
import "./style.css";

const GameCard = ({players}) => {
  return (
    <div class="row">
      <div class="col-12 col-lg-12 mt-3">
        <div class="card">
          <div class="card-body">
            <div id="timer">
              <h5 class="card-title mb-3">
                <div
                  class="p-3 bg-info bg-opacity-10 border border-info border-start-1 rounded text-danger">
                  Time Watch: 00:12:43
                </div>
              </h5>
            </div>
            <div class="row">

              <div class="col-md-4">
                <Game/>

              </div>
              <div class="col-md-8">

                <div class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                </div>

                <div class="list-group w-auto">

                  <div class="list-group-item list-group-item-action d-flex gap-3 py-3"
                    aria-current="true">

                    <div class="rounded-circle avatar">
                      <div class="avatar-title">{players?.fPlayer1 ? (players?.fPlayer1.charAt(0).toUpperCase() + players?.lPlayer1.charAt(0).toUpperCase()) : ''}</div>
                    </div>

                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div style={{width: "80%"}}>
                        <h6 class="mb-0">{players?.fPlayer1 ? (players?.fPlayer1 + " " + players?.lPlayer1) : ''}</h6>
                      </div>
                      <small class="text-muted">Your turn...</small>
                    </div>
                  </div>

                  <div class="list-group-item list-group-item-action d-flex gap-3 py-3"
                    aria-current="true">
                    <div class="rounded-circle avatar">
                      <div class="avatar-title">{players?.fPlayer1 ? (players?.fPlayer2.charAt(0).toUpperCase() + players?.lPlayer2.charAt(0).toUpperCase()) : ''}</div>
                    </div>
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div style={{width: "80%"}}>
                        <h6 class="mb-0">{players?.fPlayer2 ? (players?.fPlayer2 + " " + players?.lPlayer2) : ''}</h6>
                      </div>
                      <small class="text-muted">Played</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
