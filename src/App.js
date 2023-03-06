import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GameContext from "./GameContext";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import GamePage from "./pages/GamePage/GamePage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [playerName, setPlayerName] = useState({
    player1: localStorage.getItem("player1") || "",
    player2: localStorage.getItem("player2") || ""
  });

  useEffect(() => {
    localStorage.setItem("player1", playerName.player1);
    localStorage.setItem("player2", playerName.player2);
  }, [playerName]);

  return (
    <>
    <Header/>
      <GameContext.Provider value={{playerName, setPlayerName}}>
        <Routes>

          <Route  path="/" element={<LandingPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="*" element={<ErrorPage/>}/>

        </Routes>
      </GameContext.Provider>
      <Footer/>
    </>
  );
}

export default App;
