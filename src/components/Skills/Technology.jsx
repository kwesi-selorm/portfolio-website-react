function Technology(props) {
  return (
    <>
      <div>
        <img
          className="tech-logo"
          src={props.src}
          alt={props.alt}
          style={{ width: "30px", height: "30px" }}
        />
        <p className="technology">{props.technologyName}</p>
      </div>
    </>
  );
}

export default Technology;
