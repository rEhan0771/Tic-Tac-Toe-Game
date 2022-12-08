import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import TicTacToeContainer from "./components/TicTacToeContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TicTacToeContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
