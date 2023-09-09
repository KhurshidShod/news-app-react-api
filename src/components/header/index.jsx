import React, { Component } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'

import styles from "./Header.module.css";

export class Header extends Component {
  state = {
    navOpen: false,
  };
  render() {
    const { navOpen } = this.state;

    const closeNav = () => {
      this.setState({ navOpen: false });
    };
    const openNav = () => {
      this.setState({ navOpen: true });
    };
    return (
      <header>
        <div className="container">
          <nav>
            <div
              className={`${styles.nav__menu} ${
                navOpen ? styles.navOpen : null
              }`}
            >
              <ul>
                <li>
                  <a active href='/'>Home</a>
                </li>
                <li>
                  <NavLink to='/business'>Business</NavLink>
                </li>
                <li>
                  <NavLink to='/entertainment'>Entertainment</NavLink>
                </li>
                <li>
                  <NavLink to='/general'>General</NavLink>
                </li>
                <li>
                  <NavLink to='/health'>Health</NavLink>
                </li>
                <li>
                  <NavLink to='/science'>Science</NavLink>
                </li>
                <li>
                  <NavLink to='/sports'>Sports</NavLink>
                </li>
                <li>
                  <NavLink to='/technology'>Technology</NavLink>
                </li>
              </ul>
              <button onClick={closeNav}>
                <AiFillCloseCircle size={35} color="white" />
              </button>
            </div>
            <button onClick={openNav}>
              <FaBarsStaggered color="white" size={35} />
            </button>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
