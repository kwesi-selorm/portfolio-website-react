function ProjectItem(props) {
  return (
    <div className="project-item">
      {/* Links */}
      <a href={props.githublink} target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href={props.website} target="_blank" rel="noreferrer">
        <i className="fab fa-chrome"></i>
      </a>

      {/* Image */}
      <div style={{ margin: "auto", objectFit: "contain" }}>
        <a
          style={{ marginLeft: "0" }}
          href={props.imagelink}
          target="_blank"
          rel="noreferrer">
          <img
            className="img-fluid rounded project-image"
            style={{ width: "100%" }}
            src={props.src}
            alt={props.alt}
          />
        </a>

        {/* Description */}
        <p>{props.description}</p>
        <p className="languages">{props.languages}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
