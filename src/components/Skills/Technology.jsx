function Technology(props) {
  return (
    <>
      <div>
        <img
          className="tech-logo"
          src={props.src}
          alt={props.alt}
          style={{ width: "40px", height: "40px" }}
        />
        <p className="technology">{props.technologyName}</p>
      </div>
    </>
  );
}

export default Technology;
