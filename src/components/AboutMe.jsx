import OutlineTypesExample from "./MyBtn";

export default function AboutMe() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "55px",
        }}
      >
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          laboriosam eveniet officiis deserunt accusantium, qui fugit similique
          doloremque a iure itaque repellat velit enim neque praesentium earum
          hic tenetur pariatur?
        </p>
        <OutlineTypesExample name="download resume" />
      </div>
    </>
  );
}
