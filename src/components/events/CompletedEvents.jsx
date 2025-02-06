import { EventCard } from ".";
import eventData from "./eventCards/eventData";
import "./eventCards.scss";
import "./eventSection.scss";
export default function CompletedEvents() {
    const completedEvents = eventData.filter(
        (event) => event.completed === true
    );

    return (
        <section className="event-section">
            <h2>
                PAST <span>EVENTS</span>
            </h2>
            <div className="event-cards">
                {completedEvents.map((eventCardData, id) => (
                    <EventCard key={id} {...eventCardData} />
                ))}
            </div>
        </section>
    );
}
