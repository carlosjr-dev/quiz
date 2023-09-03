import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ask from "./pages/ask/Ask";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ask />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
