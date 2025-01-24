"use client"; 

import "./Welcome.css"; 
// import { Player } from "@lottiefiles/react-lottie-player";
// Assuming you're using Lottie Player in Next.js

export default function Welcome() {
    return (
        <div className="welcome-container">
            <div className="welcome-box">
                <h1 className="welcome-heading">We are the <span className="title">EDC!!</span></h1>
                <p className="welcome-paragraph">
                    Welcome to the Entrepreneurship Development Club (EDC) CITK.
                    Our club is dedicated to fostering innovation, creativity,
                    and entrepreneurial thinking among our members. Join us to
                    unlock your potential and bring your ideas to life!
                </p>
            </div>
        </div>
    );
}
