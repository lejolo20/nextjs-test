import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">NextJs</div>
      <ul className="header-unorderList">
        <li>
          <Link className="header-link" href="/">
            Home
          </Link>
          <Link className="header-link" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="header-link" href="/service">
            Service
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
