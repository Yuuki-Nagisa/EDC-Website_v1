import "./Sponsors.scss";
import Image from "next/image";
import { Navbar, Footer } from "@/components/globals";

const sponsors = [
  {
    name: "BTC Government",
    logo: "/sponsors/btc.png",
  },
  {
    name: "Assam Startup",
    logo: "/sponsors/AS.png",
  },
  {
    name: "WEB3 Assam",
    logo: "/sponsors/web3assam.png",
  },
  {
    name: "GPlus",
    logo: "/sponsors/gplus.png",
  },
  {
    name: "Fybros",
    logo: "/sponsors/fybros.png",
  },
  {
    name: "Northeast Angel Network",
    logo: "/sponsors/northeast.png",
  },
  {
    name: "STI HUB CITK",
    logo: "/sponsors/stihub.jpeg",
  },
  {
    name: "Creat",
    logo: "/sponsors/CREATE.jpeg",
  },
];

export default function Sponsors() {
  return (
    <>
      <Navbar />
      <div className="sponsorpage">

      <main className="sponsors">
        <h1>Our Sponsors</h1>

        <div className="sponsor-grid">
          {sponsors.map((sponsor, index) => (
            <div className="sponsor-card" key={index}>
              <div className="logo-placeholder">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={160}
                  height={90}
                />
              </div>
              <p>{sponsor.name}</p>
            </div>
          ))}
        </div>
      </main>
      </div>

      <Footer />
    </>
  );
}
