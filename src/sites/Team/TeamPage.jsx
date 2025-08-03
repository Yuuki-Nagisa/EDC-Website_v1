import { TeamSection } from "@/components/team";
import { Navbar, Footer } from "@/components/globals";
import "./TeamPage.scss";
export default function TeamPage() {
    return (
        <>
            <Navbar />
            <main className="team-section">
                <TeamSection />
            </main>
            <Footer />
        </>
    );
}
