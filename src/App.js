import React from 'react';
import './style.scss';
import Header from "./components/header/header";
import Honestly from "./components/honestly/honestly";

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Honestly/>
    </div>
  );
}

export default App;
