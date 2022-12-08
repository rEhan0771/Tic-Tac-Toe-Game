import React, { useState } from "react";
import Input from "../Input";
import "./addplayer.css";

const AddPlayer = () => {
  const [players, setPlayers] = useState({
    fPlayer1: "",
    lPlayer1: "",
    fPlayer2: "",
    lPlayer2: ""
  });
  const [errMsg, setErrMsg] = useState({
    fPlayer1: "",
    lPlayer1: "",
    fPlayer2: "",
    lPlayer2: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayers({ ...players, [name]: value });
    setErrMsg({ ...errMsg, [name]: "" });
  };

  const onStartGame = () => {};
  return (
    <div class="col-12 col-lg-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Add Player</h5>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="firstName" class="form-label">
                First name
              </label>
              <input type="text" class="form-control" id="firstName" />
            </div>
            <div class="col-md-6">
              <label for="lastName" class="form-label">
                Last Name
              </label>
              <input type="text" class="form-control" id="lastName" />
            </div>
            <div class="col-md-6">
              <label for="firstName" class="form-label">
                First name
              </label>
              <input type="text" class="form-control" id="firstName" />
            </div>
            <div class="col-md-6">
              <label for="lastName" class="form-label">
                Last Name
              </label>
              <input type="text" class="form-control" id="lastName" />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Start Game
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlayer;
