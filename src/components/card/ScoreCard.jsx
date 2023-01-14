import React from "react";

const ScoreCard = ({players}) => {
  return (
    <div class="col-12 col-lg-6">
      <br class="d-none-md" />
      <div class="card">
        <div class="card-body">
          <div>
            <h5 class="card-title">Score Card</h5>
            <div class="card-subtitle mb-2 text-muted">Total Game Played : 5</div>
          </div>
          <div class="list-group w-auto">
            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3"
              aria-current="true">
              <div class="rounded-circle avatar">
                <div class="avatar-title">{players?.fPlayer1 ? (players?.fPlayer1.charAt(0).toUpperCase() + players?.lPlayer1.charAt(0).toUpperCase()) : ''}</div>
              </div>

              <div class="d-flex gap-2 w-100 justify-content-between">
                <div style={{width: "50%"}}>
                  <h6 class="mb-0">{players?.fPlayer1 ? (players?.fPlayer1 + " " + players?.lPlayer1) : ''}</h6>
                </div>
                <button type="button" class="btn btn-success" style={{width: "25%"}}>
                  Won <span class=" badge rounded-pill bg-danger">2</span>
                </button>
                <button type="button" class="btn btn-warning" style={{width: "25%"}}>
                  Lost <span class=" badge rounded-pill bg-danger">3</span>
                </button>
              </div>
            </div>
            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3"
              aria-current="true">
              <div class="rounded-circle avatar">
                <div class="avatar-title">{players?.fPlayer2 ? (players?.fPlayer2.charAt(0).toUpperCase() + players?.lPlayer2.charAt(0).toUpperCase()) : ''}</div>
              </div>
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div style={{width: "50%"}}>
                  <h6 class="mb-0">{players?.fPlayer2 ? (players?.fPlayer2 + " " + players?.lPlayer2) : ''}</h6>
                </div>
                <button type="button" class="btn btn-success" style={{width: "25%"}}>
                  Won <span class=" badge rounded-pill bg-danger">3</span>
                </button>
                <button type="button" class="btn btn-warning" style={{width: "25%"}}>
                  Lost <span class=" badge rounded-pill bg-danger">2</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
