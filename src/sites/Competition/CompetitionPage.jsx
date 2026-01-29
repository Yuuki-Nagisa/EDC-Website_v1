import "./Competition.scss";
import Image from "next/image";
import { Navbar, Footer } from "@/components/globals";

const previousCompetitions = [
  { name: "CEO Roleplay", logo: "/competitions/ceo.webp" },
  { name: "IPL Auction", logo: "/competitions/ipl_auction.webp" },
  { name: "Scavenger Hunt", logo: "/competitions/scavenger_hunt.webp" },
  { name: "Shark Tank", logo: "/competitions/shark-tank.webp" },
];

const expectedCompetitions = [
  { name: "Ad Making Competition", logo: "/competitions/ad.webp" },
  { name: "IPL Auction", logo: "/competitions/ipl_auction.webp" },
  { name: "Pitch Yourself as Brand", logo: "/competitions/brand.webp" },
  { name: "Shark Tank", logo: "/competitions/shark-tank.webp" },
  { name: "Scavenger Hunt", logo: "/competitions/scavenger_hunt.webp" },
  { name: "Infographic Challenge", logo: "/competitions/infographic.webp" },
  { name: "What if Competition", logo: "/competitions/what-if.webp" },
  { name: "Knowledge Arena", logo: "/competitions/kbowledge-arena.webp" },
  { name: "Linkedin Post Challenge", logo: "/competitions/linkedin-post.webp" },
];

function CompetitionSection({ title, items, showApply }) {
  return (
    <section className="sponsors">
      <h1>{title}</h1>

      <div className="sponsor-grid">
        {items.map((item, index) => (
          <div className="sponsor-card" key={index}>
            <div className="logo-placeholder">
              <Image
                src={item.logo}
                alt={item.name}
                width={160}
                height={90}
              />
            </div>

            <p>{item.name}</p>

            {showApply && (
              <a href="#" className="apply-btn">
                Apply
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CompetitionPage() {
  return (
    <>
      <Navbar />

      <div className="sponsorpage">
       
        <CompetitionSection
          title="Previous Competitions"
          items={previousCompetitions}
          showApply={false}
        />

       
        <CompetitionSection
          title="Expected Competitions"
          items={expectedCompetitions}
          showApply={true}
        />
      </div>

      <Footer />
    </>
  );
}
