function ProjectItem(props) {
  return (
    <div className="project-item">
      {/* Links */}
      <a
        href={props.githublink}
        target="_blank"
        rel="noreferrer"
        style={{ marginInline: "5px" }}
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href={props.website}
        target="_blank"
        rel="noreferrer"
        style={{ marginInline: "5px" }}
      >
        <i className="fab fa-chrome"></i>
      </a>

      {/* Image */}
      <div style={{ margin: "auto" }} className="project-details-container">
        <a
          style={{ marginLeft: "0" }}
          href={props.imagelink}
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-image" src={props.src} alt={props.alt} />
        </a>

        {/* Description */}
        <p className="project-description">{props.description}</p>
        <p className="languages">{props.languages}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
