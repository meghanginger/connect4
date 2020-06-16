import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Play | Connect4" />
    <h1>Connect 4</h1>
    <p>We're connecting you with another player, {window.localStorage.getItem("playerName")}.</p>
    <button>
        Go to game
    </button>
  </Layout>
)

export default IndexPage