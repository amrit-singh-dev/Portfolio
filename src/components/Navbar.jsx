import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <h2>Amrit Singh</h2>

        <ul className={open ? "nav-links active" : "nav-links"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#qa">QA Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </nav>
    </header>
  );
}

export default Navbar;