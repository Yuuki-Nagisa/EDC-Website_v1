"use client";

import { useState } from "react";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import Image from "next/image";

import "./UdbhavNavbar.scss";

const UdbhavNavbar = () => {
  const [sidebar, setSidebar] = useState(false);

  // Function to toggle sidebar
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <div className="nav-fixed">
        <div className="left">
          <Link href="/">
            <Image
              src="/udbhav/logo/logo 2.png"
              alt="Logo"
              width={100}
              height={80}
              className="esmt-icon"
            />
          </Link>
        </div>
        <div className="right">
          <div className="hamburger-wrapper" onClick={showSidebar}>
            <Hamburger toggled={sidebar} size={22} color="black" />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <nav className={`nav-bar ${sidebar ? "active" : ""}`}>
        <ul className="nav-menu-items">
          <li>
            <Link href="/" onClick={showSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/events" onClick={showSidebar}>
              Events
            </Link>
          </li>
          {/* <li><Link href="/speakers" onClick={showSidebar}>Speakers</Link></li> */}

          <li>
            <Link
              href="https://forms.gle/qKoRhxmMKkL4XvES6"
              target="_blank"
              onClick={showSidebar}
            >
              Register
            </Link>
          </li>
          {/* <li><span className="nav-attr">emerge. evolve. exceed.</span></li> */}
        </ul>
      </nav>
    </>
  );
};

export default UdbhavNavbar;
