import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ links }) => {
  return (
    <nav className="navbar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            {link.path ? (
              <Link to={link.path}>{link.label}</Link>
            ) : (
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
