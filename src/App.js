import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addproduct from "./components/Addproduct";
import Register from "./components/Register";
import Login from "./components/Login";
import Updateproduct from "./components/Updateproduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App"></div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/add" element={<Addproduct />}></Route>
          <Route path="/update" element={<Updateproduct />}></Route>
        </Routes>
        <h1>E comm project</h1>
      </BrowserRouter>
    </>
  );
}

export default App;
