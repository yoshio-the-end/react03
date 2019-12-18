import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog/:id" component={Blog} />
    </div>
  </BrowserRouter>
)

const Home = () => {
  return (
    <div className="box">
      <h1 className="title">ケミカルの香り</h1>
      <p><Link to="/about">アバウトへ</Link></p>
    </div>
  )
}

const Blog = props => {
  const { id } = props.match.params
  return (
    <div className="box">
      <p className="title">{id}番目の記事です</p>
    </div>
  )
}

const About = () => {
  return (
    <div className="box">
      <h1 className="title">さぁ、異臭を放ちくる</h1>
      <p><Link to="/">ホームへ</Link></p>
    </div>
  )
}

export default App