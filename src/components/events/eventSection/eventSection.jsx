import { EventCard } from "..";
import eventData from "../eventCards/eventData";

export default function EventSection() {
    const completedEvents = eventData.filter(
        (event) => event.completed === true
    );

    return (
        <section>
            {completedEvents.map((eventCardData, id) => (
                <EventCard key={id} {...eventCardData} />
            ))}
        </section>
    );
}
