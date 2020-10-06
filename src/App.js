import React from 'react';
import './style.scss';
import Header from "./components/header/header";
import Honestly from "./components/honestly/honestly";
import About from "./components/about/about";

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Honestly/>
        <About/>
    </div>
  );
}

export default App;
