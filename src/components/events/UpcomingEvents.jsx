import { EventCard } from ".";
import eventData from "./eventCards/eventData";
import "./eventCards.scss";
import "./eventSection.scss";
export default function UpcomingEvents() {
    const completedEvents = eventData.filter(
        (event) => event.completed === false
    );
    if (completedEvents.length === 0) {
        return <> </>;
    }

    return (
        <section className="event-section">
            <h2>
                UPCOMING <span>EVENTS</span>
            </h2>
            <div className="event-cards">
                {completedEvents.map((eventCardData, id) => (
                    <EventCard key={id} {...eventCardData} />
                ))}
            </div>
        </section>
    );
}
