import "./eventCard.scss";
import Image from "next/image";
export default function EventCard({ ...eventData }) {
    const { image, title, date, venue,completed,link } = eventData;

    return (
        <div className="event-card" style={{ width: "21rem" }}>
            <Image className="event-card-img-top" src={image} alt="Card image cap" width={200} height={200} />
            <div className="event-card-body">
                <h5 className="event-card-title">{title}</h5>
                <p className="event-card-text">
                    Date: {date} <br />
                    Venue: {venue}
                </p>
                {completed ? (
                    <button className="event-button" disabled>
                        Registrations Closed
                    </button>
                ) : (
                        <button className="event-button event-button-upcoming">
                            <a href={link} style={{ color: "white" }}>Register</a>
                        </button>
                )}
            </div>
        </div>
    );
}
