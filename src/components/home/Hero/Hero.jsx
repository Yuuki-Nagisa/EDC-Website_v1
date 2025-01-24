"use client";
import "./Hero.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="container">
                <div className="left-section">
                    <div className="text">
                        <h3 className="animate-character">
                            <br />
                            Nurturing the Entrepreneur <br />
                            in you
                        </h3>
                        <a href="#welcome">

                            {/* <dotlottie-player
                                src="https://lottie.host/03a99eae-a196-4fd9-a257-b58fcb9716ad/L5igv5vE8i.json"
                                background="transparent"
                                speed="0.8"
                                style={{ width: "120px", height: "120px" }}
                                loop
                                autoplay
                            ></dotlottie-player> */}
                            <DotLottieReact
                                src="https://lottie.host/03a99eae-a196-4fd9-a257-b58fcb9716ad/L5igv5vE8i.json"
                                speed={0.8}
                                style={{ width: "120px", height: "120px" }}
                                loop
                                autoplay
                            />
                        </a>
                    </div>
                </div>

                <div className="right-section">
                    <DotLottieReact
                        id="lottie-player"
                        src="https://lottie.host/4d1b6d14-798a-48ef-a821-ce5827d9b1d4/naVIWR3U3i.json"
                        speed={1.5}
                        style={{ width: "500px", height: "600px" }}
                        loop
                        autoplay
                    />
                </div>
            </div>
        </section>
    );
}
