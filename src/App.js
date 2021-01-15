import React from 'react';
import Reactdom from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Projects from './Components/Projects'
import Nav from './Components/Nav'
import About from './Components/About'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Reccomendations from './Components/Reccomendations'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Reccomendations />
        <Contact />
      </BrowserRouter >
    </div>
  );
}

export default App;
