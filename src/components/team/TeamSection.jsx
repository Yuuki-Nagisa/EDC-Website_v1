import { TeamComponent } from ".";
import teamdata from "../../../public/data/team.json";
export default function TeamSection() {
    return (
        <section className="team">
            <div className="container-core">
                <div className="row">
                    <div className="section-title">
                        <h2>Core Team</h2>
                    </div>
                </div>
                <div className="team row-core">
                    {teamdata.map((teamMember, index) => (
                        <TeamComponent key={index} {...teamMember} />
                    ))}
                </div>
            </div>
        </section>
    );
}
