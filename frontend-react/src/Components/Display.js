import React from "react";
import { Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";

export const Display = () => {
  return (
    <div>
      <Row className="mt-5">
        <Col>
          <h2> TaskEntry</h2>
          <hr />
          <Table striped bordered hover variant="dark"></Table>
        </Col>
      </Row>
    </div>
  );
};
