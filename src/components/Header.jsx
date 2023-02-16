import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <div className="main-container header-content">
        <figure>
          <img
            src="https://images.freeimages.com/images/previews/09e/moon-art-1641879.png"
            alt="logo"
            loading="lazy"
          />
        </figure>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
