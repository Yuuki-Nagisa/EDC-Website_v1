import "./activity.css";
import Image from "next/image";

export default function Activity() {
    return (
        <div className="activity-container">
            <h2 className="heading">
                Club <span>Activities</span> and <span>programs</span>
            </h2>
            <div className="row">
                <div className="card card-circle">
                    <div className="card-body">
                        <Image
                            className="card-img"
                            src="/assets/activities/seminar.png"
                            alt=""
                            width={100}
                            height={100}
                        />
                        <h5 className="card-title">Workshops & Seminars</h5>
                        <p className="card-text">
                            Our club organizes regular workshops and seminars
                            conducted by industry experts, covering topics such
                            as ideation, business planning, marketing
                            strategies, and more
                        </p>
                    </div>
                </div>
                <div className="card card-circle">
                    <div className="card-body">
                        <Image
                            className="card-img"
                            src="/assets/activities/competition.png"
                            alt=""
                            width={100}
                            height={100}
                        />
                        <h5 className="card-title">
                            Entrepreneurship Competitions
                        </h5>
                        <p className="card-text">
                            We host exciting entrepreneurship competitions where
                            students get to pitch their business ideas, receive
                            valuable feedback, and compete for prizes.
                        </p>
                    </div>
                </div>
                <div className="card card-circle">
                    <div className="card-body">
                        <Image
                            className="card-img"
                            src="/assets/activities/funding.png"
                            alt=""
                            width={100}
                            height={100}
                        />
                        <h5 className="card-title">Startup Incubator</h5>
                        <p className="card-text">
                            Our club provides support for members with promising
                            startup ideas, offering access to mentorship,
                            funding opportunities, and a collaborative space to
                            grow their ventures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
