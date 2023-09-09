//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  pagrSize=5;
  render() {
    return (
      <div>
        <Router>
        <Navbar/> 
        <Routes>
          {/* route should be self closing */}
          <Route exact path="/" element={<News key="general"  pagesize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News key="business"  pagesize={this.pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment"element={<News key="entertainment" pagesize={this.pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/general"element={<News key="general"   pagesize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/health"element={<News key="health"   pagesize={this.pageSize} country="in" category="health"/>}/>
          <Route exact path="/science"element={<News key="science"   pagesize={this.pageSize} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News key="sports"   pagesize={this.pageSize} country="in" category="sports"/>}/>
          <Route exact path="/technology"element={<News key="technology"   pagesize={this.pageSize} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
