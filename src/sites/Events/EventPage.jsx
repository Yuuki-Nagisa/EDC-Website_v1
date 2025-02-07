import "./EventPage.scss";
import { UpcomingEvents, CompletedEvents } from "@/components/events";
import { Navbar } from "@/components/globals";
export default function Event() {
    return (
        <>
            <Navbar/>
            <main className="events">
                <UpcomingEvents />
                <CompletedEvents />
            </main>
        </>
    );
}
