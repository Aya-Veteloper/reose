import ProgressBar from "react-bootstrap/ProgressBar";

function ScreenreaderLabelExample(props) {
  return (
    <ProgressBar
      style={{ margin: "25px" }}
      variant="info"
      now={props.now}
      label={`${props.skl}`}
    />
  );
}

export default ScreenreaderLabelExample;
