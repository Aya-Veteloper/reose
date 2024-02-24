import Card from "react-bootstrap/Card";

function TextExample(props) {
  return (
    <Card
      style={{ width: "18rem", backgroundColor: props.colors, margin: "25px" }}
    >
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
