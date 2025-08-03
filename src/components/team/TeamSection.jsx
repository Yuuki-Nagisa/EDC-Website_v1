import { TeamComponent } from ".";
import teamdata from "../../../public/data/team.json";
import { Navbar } from "../globals";
import ContainerComponent from "./ContainerComponent";
export default function TeamSection() {
  return (
    <section className="team">
      <h2>
        Meet our <span id="team"> Team </span>
      </h2>
      <p>
        Our dedicated team of mentors and youths are passionate about bringing
        ideas to life and driving success in every project we undertake.
      </p>

      <ContainerComponent
        title="Faculty Advisors"
        data={teamdata}
        type="faculty"
      />
      <ContainerComponent title="Core Team" data={teamdata} type="core" />
      <ContainerComponent
        title="Web-Development Team"
        data={teamdata}
        type="web"
      />
      <ContainerComponent title="Our Alumni" data={teamdata} type="alumni" />
    </section>
  );
}
