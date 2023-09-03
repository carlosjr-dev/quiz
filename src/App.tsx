import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ask from "./pages/ask/Ask";
import EndGame from "./pages/end/EndGame";
import HomePage from "./pages/home/HomePage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ask />}></Route>
        <Route path="/quest" element={<HomePage />}></Route>
        <Route path="/endgame" element={<EndGame />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
