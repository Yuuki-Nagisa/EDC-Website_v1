import "./teamComponent.scss";

function getIconClassName(iconName) {
  const iconNames = {
    email: "fa fa-envelope",
    instagram: "fa-brands fa-instagram",
    linkedin: "fa-brands fa-linkedin",
    github: "fa-brands fa-github",
  };

  return iconNames[iconName];
}

export default function TeamComponent({
  name,
  role,
  image,
  Year,
  Module,
  Branch,
  position,
  LinkedIn,
  Github,
  Instagram,
  email,
}) {
  return (
    <div className="team-item coreteam-item">
      <img
        className="item-img"
        src={image ?? "https://placehold.co/100"}
        alt="team"
      />
      <h4>
        {name}
        <br />
        <span>{position}</span>
        <span>
          {Module} {Year} {Branch}
        </span>
      </h4>
      <div className="social-links">
        {LinkedIn && (
          <a
            href={`https://www.linkedin.com/in/${LinkedIn}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className={getIconClassName("linkedin")} />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            <i className={getIconClassName("email")} />
          </a>
        )}
        {Github && (
          <a
            href={`https://www.github.com/${Github}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className={getIconClassName("github")} />
          </a>
        )}
        {Instagram && (
          <a
            href={`https://www.instagram.com/${Instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className={getIconClassName("instagram")} />
          </a>
        )}
      </div>
    </div>
  );
}
