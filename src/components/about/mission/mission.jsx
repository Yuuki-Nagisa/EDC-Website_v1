import "./mission.css";
import Image from "next/image";

export default function Mission() {
    return (
        <>
            <div className="mission-container">
                <h2 className="mission-container-title">
                    Club <span>Mission</span> and <span>Goals</span>
                </h2>
                <p className="mission-container-text">
                    Our mission is to cultivate an entrepreneurial mindset among
                    CITK students, empowering them to create, innovate, and turn
                    their ideas into successful ventures. Our goals include
                </p>

                <div className="gradient-cards">
                    <div className="card">
                        <div className="mission-container-card bg-green-box">
                            <Image src="/assets/mission/bulb.png" height={250} width={250} alt="" />
                            <p className="card-title">
                                1. Inspiring Creativity
                            </p>
                            <p className="card-description">
                                We aim to inspire and nurture creativity in our
                                members, encouraging them to think outside the
                                box and come up with groundbreaking ideas.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="mission-container-card bg-white-box">
                            <Image src="/assets/mission/collab.png" height={250} width={320} alt="" />
                            <p className="card-title">
                                2. Fostering Collaboration
                            </p>
                            <p className="card-description">
                                We foster a collaborative environment where
                                students can share knowledge, network, and
                                collaborate on entrepreneurial projects.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="mission-container-card bg-yellow-box">
                            <Image src="/assets/mission/skills.png" height={280} width={280} alt="" />
                            <p className="card-title">
                                3. Developing Practical Skills
                            </p>
                            <p className="card-description">
                                We provide opportunities for members to develop
                                essential skills such as problem-solving,
                                leadership, and effective communication.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="mission-container-card bg-blue-box">
                            <Image src="/assets/mission/enterpreneur.png" height={280} width={280} alt="" />
                            <p className="card-title">
                                4. Creating Entrepreneurs
                            </p>
                            <p className="card-description">
                                Our ultimate goal is to empower CITK students to
                                become successful entrepreneurs who make a
                                positive impact on the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
