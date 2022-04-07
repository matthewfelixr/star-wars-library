import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Components/Pages/Home";
import Movie from "./Components/Pages/Movie"
import './main.css';
import Header from "./Components/Header/Header";



const App = () => {
  

    return (
      <div className="app_container">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movie/:id" element={<Movie/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;