import { Navbar } from "@components/globals";
import { Hero, Welcome, Carousel } from "@components/home";

import "./Homepage.css";

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Welcome />
            <Carousel />
        </div>
    );
}
