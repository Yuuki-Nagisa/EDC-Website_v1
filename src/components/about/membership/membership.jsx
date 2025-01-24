"use client";

import "./membership.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Membership() {
    return (
        <div className="membership-info">
            <h2>Membership Information</h2>
            <div id="think">
                <DotLottieReact
                    src="https://lottie.host/5e90d1c3-7ee3-4edd-bf9c-22001de8a910/TmbuDwCE5t.json"
                    background="transparent"
                    speed="1.5"
                    loop
                    autoplay
                />
            </div>
            <p>Here is some information about becoming a member...</p>
            <p id="info">
                As a club member, you will gain access to exclusive resources,
                industry connections, networking events, and the opportunity to
                collaborate with like-minded individuals.We offer different
                membership types to cater to various interests and levels of
                commitment, including full-time membership, associate
                membership, and honorary membership.
            </p>
        </div>
    );
}

