import TextExample from "./Project";

export default function Portfolio() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "10%",
        }}
      >
        <h1>Portfolio</h1>
        <div className="row">
          <TextExample colors="#777" className="col-4" />
          <TextExample colors="blue" className="col-4" />
          <TextExample colors="#777" className="col-4" />
          <TextExample colors="blue" className="col-4" />
        </div>
        <div className="row">
          <TextExample colors="blue" className="col-4" />
          <TextExample colors="#777" className="col-4" />
          <TextExample colors="blue" className="col-4" />
          <TextExample colors="#777" className="col-4" />
        </div>
      </div>
    </>
  );
}
