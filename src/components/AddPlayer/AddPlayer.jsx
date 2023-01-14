import React, { useState } from "react";

const AddPlayer = ({ onAddClick }) => {
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
    e.preventDefault();
    setPlayers({ ...players, [name]: value });
    setErrMsg({ ...errMsg, [name]: "" });
  };

  const onStartGame = () => { };
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
              <input type="text" class="form-control" id="firstName"
                name="fPlayer1"
                value={players.fPlayer1}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <label for="lastName" class="form-label">
                Last Name
              </label>
              <input type="text" class="form-control" id="lastName"
                name="lPlayer1"
                value={players.lPlayer1}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <label for="firstName" class="form-label">
                First name
              </label>
              <input type="text" class="form-control" id="firstName"
                name="fPlayer2"
                value={players.fPlayer2}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <label for="lastName" class="form-label">
                Last Name
              </label>
              <input type="text" class="form-control" id="lastName"
                name="lPlayer2"
                value={players.lPlayer2}
                onChange={handleChange}
              />
            </div>
          </form>
          <div class="col-12 mt-3">
            <button type="submit" class="btn btn-primary" onClick={() => onAddClick(players)}>
              Start Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlayer;
