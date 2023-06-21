import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export const InputForm = () => {
  return (
    <div>
      <h1> Track Your Activity</h1>
      <Form className=" border p-2 bg-light rounded">
        <Row className="g-2">
          <Col md="6">
            <Form.Control
              required
              className="mb-2"
              id="inlineFormInput"
              placeholder=" Coding"
            />
          </Col>
          <Col md="2">
            <InputGroup className="mb-2" type="number">
              <Form.Control
                required
                id="inlineFormInputGroup"
                placeholder="3"
                type="number"
              />
            </InputGroup>
          </Col>

          <Col className="d-grid">
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
