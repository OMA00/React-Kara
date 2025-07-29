import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Seconpage from "./Pages/Seconpage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Seconpage" element={<Seconpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
