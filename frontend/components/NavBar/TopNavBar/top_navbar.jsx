import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import SessionContainer from '../../Session/session_container';

export default (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="top-navbar">
      <section className="left-section">
        <p>=</p>
        <NavLink to="/" className="logo-name">
          <img src={window.logo} alt="logo" className="logo"/>
          <h1>CloneTube</h1>
        </NavLink>
      </section>
      <section className="middle-section">
        <input
          type="text"
          value={searchText}
          className="search-bar"
          placeholder="Search"
          onChange={(e) => setSearchText(e)}
        />
        <button className="search-icon"><i className="fas fa-search"></i></button>
        <button className="voice-search"><i className="fas fa-microphone"></i></button>
      </section>
      <section className="right-section">
        <NavLink to="/upload">+</NavLink>
        <SessionContainer />
      </section>
    </div>
  )
}
