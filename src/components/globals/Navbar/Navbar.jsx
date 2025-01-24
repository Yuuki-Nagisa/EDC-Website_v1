import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image
                    src="/assets/brand-logo/logo2.png"
                    alt="Logo"
                    width={300}
                    height={300}
                />
            </div>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <FontAwesomeIcon icon={faBars} />
            </label>

            <ul className="list">
                <li id="active">
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/events">Events</Link>
                </li>
                <li>
                    <Link href="/team">Team</Link>
                </li>
                <li>
                    <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link href="/contact">Reach Us</Link>
                </li>
                <li>
                    <Link href="/udbhav">E-Summit 24</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
