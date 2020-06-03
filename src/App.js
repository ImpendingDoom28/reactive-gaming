import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Container from "./components/container/Container";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Container />
      </div>
    </BrowserRouter>
  );
}

export default App;
