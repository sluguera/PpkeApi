import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/NavBar';
import PokemonListPage from './pages/PokemonListPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import TeamPage from "./pages/TeamPage";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
      <NavBar links={[{ label: "Lista", path: "/" },{label:"Equipo",path:"/team"}]} />
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
