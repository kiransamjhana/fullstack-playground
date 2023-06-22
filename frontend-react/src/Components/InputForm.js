import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export const InputForm = () => {
  const [form, setForm] = useState({});
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(setForm);
  };

  return (
    <div>
      <h1> Track Your Activity</h1>
      <Form className=" border p-2 bg-light rounded" onSubmit={handleOnSubmit}>
        <Row className="g-2">
          <Col md="6">
            <Form.Control
              required
              className="mb-2"
              id="inlineFormInput"
              name="task"
              placeholder=" Coding"
              onChange={handleOnChange}
            />
          </Col>
          <Col md="2">
            <InputGroup className="mb-2" type="number">
              <Form.Control
                required
                id="inlineFormInputGroup"
                placeholder="3"
                type="number"
                name="hr"
                onChange={handleOnChange}
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
