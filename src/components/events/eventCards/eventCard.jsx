import "./eventCard.css";
export default function EventCard({ ...eventData }) {
    const { image, title, date, venue } = eventData;

    return (
        <div className="card" style={{ width: "21rem" }}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    Date: {date} <br />
                    Venue: {venue}
                </p>
                <a href="#" className="btn btn-primary">
                    Registrations Closed
                </a>
            </div>
        </div>
    );
}
