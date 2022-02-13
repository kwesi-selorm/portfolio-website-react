function Technology(props) {
  return (
    <>
      <div>
        <img
          src={props.src}
          alt={props.alt}
          style={{ width: "30px", height: "30px" }}
        />
        <p className="technology" style={{ fontSize: "1.1rem" }}>
          {props.technologyName}
        </p>
      </div>
    </>
  );
}

export default Technology;
