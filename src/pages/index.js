import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const enterGame = (playerName) => {
  playerName !== "" && window.localStorage.setItem("playerName", playerName);
  navigate("/connect/");
}

const IndexPage = () => {
  const [playerName, setPlayerName] = useState('');
  console.log(playerName);
  return (
    <Layout>
      <SEO title="Enter | Connect4" />
      {
        window.localStorage.getItem("playerName") 
        ? (
          <div>
            <h1>Welcome back, {window.localStorage.getItem("playerName")}.</h1>
            <h3> Not {window.localStorage.getItem("playerName")}? Change your name below.</h3>
          </div>
        )
        : (
          <div>
            <h1>Hey there, you look new.</h1>
            <h3>Enter your name below.</h3>
          </div>
        )
      }
      <input type="text" value={playerName} onChange={e => setPlayerName(e.target.value)} />
      <p>Welcome to Connect4.</p>
      <p>Enter your name and press go.</p>
      <button 
        onClick={() => enterGame(playerName)}>
            Connect to another player 
      </button>
    </Layout>
  )
}

export default IndexPage;
