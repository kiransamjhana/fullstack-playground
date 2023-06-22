import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { InputForm } from "./Components/InputForm";
import { Display } from "./Components/Display";
function App() {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col className="mt-5 text-center fs-1 mb-2"> Save Your Time </Col>
        </Row>{" "}
        <InputForm />
        <Display />
      </Container>
    </div>
  );
}

export default App;
