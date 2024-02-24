import OutlineTypesExample from "./MyBtn";
export default function Header() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "55px",
          backgroundColor: "#777",
        }}
      >
        <h1>John Smith</h1>
        <p>Web Developer & Designer</p>
        <OutlineTypesExample name="contact me" />
      </div>
    </>
  );
}
