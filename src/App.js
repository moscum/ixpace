import React from 'react';
import './style.scss';
import Header from "./components/header/header";
import Honestly from "./components/honestly/honestly";
import About from "./components/about/about";
import Availability from "./components/availability/availability";
import Platform from "./components/platform/platform";
import Steps from "./components/steps/steps";
import Changes from "./components/changes/changes";

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Honestly/>
        <About/>
        <Availability/>
        <Platform/>
        <Steps/>
        <Changes/>
    </div>
  );
}

export default App;
