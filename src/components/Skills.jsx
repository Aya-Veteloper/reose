import ScreenreaderLabelExample from "./MySkill";

export default function Skills() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "55px",
          backgroundColor: "#777",
        }}
      >
        <h1>Skills</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          reprehenderit laudantium officia nisi, id voluptates illum facere quia
          vitae maiores, corrupti, voluptatem delectus? Sequi veritatis
          molestiae sint optio, error dolore.
        </p>
        <div style={{ width: "600px", margin: "55px auto" }}>
          <ScreenreaderLabelExample  now={60} skl="HTML" />
          <ScreenreaderLabelExample now={50} skl="CSS" />
          <ScreenreaderLabelExample now={67} skl="JS" />
          <ScreenreaderLabelExample now={63} skl="React" />
          <ScreenreaderLabelExample now={99} skl="Angular" />
        </div>
      </div>
    </>
  );
}
