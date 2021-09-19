import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Posts/Home";
import OnePost from "./components/Posts/OnePost";
import Footer from "./components/Footer/Footer";
import AllPosts from "./components/Posts/AllPosts";
import Contact from "./components/Contact/Contact";
import FundUs from "./components/FundUs/FundUs";
import SingleAuthor from "./components/Author/SingleAuthor";
import AllAuthors from "./components/Author/AllAuthors";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={AllAuthors} path="/authors" exact />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={FundUs} path="/fund-us" />
        <Route component={AllPosts} path="/all-posts" />
        <Route component={OnePost} path="/posts/:slug" />
        <Route component={SingleAuthor} path="/authors/:authorName" />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
