function Technology(props) {
  return (
    <>
      <div>
        <img
          src={props.src}
          alt={props.alt}
          style={{ width: "20px", height: "20px" }}
        />
        <p className="technology" style={{ fontSize: "0.9rem" }}>
          {props.technologyName}
        </p>
      </div>
    </>
  );
}

export default Technology;
