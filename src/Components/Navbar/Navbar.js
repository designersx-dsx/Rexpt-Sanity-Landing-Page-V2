import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';  // adjust path if needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navMain}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src="/Svg/rexpt-logo.svg" alt="rexpt-logo" />
        </div>

        {/* Menu Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li>
            <Link to="/">Features</Link>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="#industries">Industries</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Right Section */}
        <div className={styles.right}>
          <button className={styles.startBtn}>Get Started</button>

          {/* Hamburger */}
          <div
            className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
