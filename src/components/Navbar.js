import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/">Buzz-Bulletin</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
      <li class="nav-item active">
        <Link className="nav-link" to="/general">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/business">Business</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/entertainment">Entertainment</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/health">Health</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/science">Science</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/sports">Sports</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/technology">Technology</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      </div>
    );
  }
}

export default Navbar;
