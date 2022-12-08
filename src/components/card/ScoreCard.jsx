import React from "react";
import AttemptBox from "../shareComponent/AttemptBox";
import ImageCircle from "../shareComponent/ImageCircle";
//import "./card.css";

const ScoreCard = () => {
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
                <div class="avatar-title">AR</div>
              </div>

              <div class="d-flex gap-2 w-100 justify-content-between">
                <div style="width: 50%;">
                  <h6 class="mb-0">Ananth Rathi</h6>
                </div>
                <button type="button" class="btn btn-success" style="width: 25%;">
                  Won <span class=" badge rounded-pill bg-danger">2</span>
                </button>
                <button type="button" class="btn btn-warning" style="width: 25%;">
                  Lost <span class=" badge rounded-pill bg-danger">3</span>
                </button>
              </div>
            </div>
            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3"
              aria-current="true">
              <div class="rounded-circle avatar">
                <div class="avatar-title">RA</div>
              </div>
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div style="width: 50%;">
                  <h6 class="mb-0">Avantika Rathod</h6>
                </div>
                <button type="button" class="btn btn-success" style="width: 25%;">
                  Won <span class=" badge rounded-pill bg-danger">3</span>
                </button>
                <button type="button" class="btn btn-warning" style="width: 25%;">
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
