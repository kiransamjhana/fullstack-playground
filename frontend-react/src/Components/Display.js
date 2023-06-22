import React from "react";
import { Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";

export const Display = () => {
  return (
    <div>
      <Row className="mt-5">
        <Col>
          <h3 className="text-center">Entry List</h3>
          <hr />
          <Table striped bordered hover variant="dark">
            <tbody>
              {entryList.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="d-flex">
                      <Form.Check value={item._id} onChange={handleOnSelect} />{" "}
                      {item.task}
                    </div>
                  </td>

                  <td>{item.hr}</td>
                  <td>
                    <Button
                      variant="info"
                      title="Mark as bad list"
                      onClick={() =>
                        handleOnSwitch({ _id: item._id, type: "bad" })
                      }
                    >
                      <i class="fa-solid fa-arrow-right"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h3 className="text-center">Bad List</h3>
          <hr />
          <Table striped bordered hover variant="dark">
            <tbody>
              {badList.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="d-flex">
                      <Form.Check value={item._id} onChange={handleOnSelect} />{" "}
                      {item.task}
                    </div>
                  </td>
                  <td>{item.hr}</td>
                  <td>
                    <Button
                      variant="danger"
                      title="Mark as bad entry"
                      onClick={() =>
                        handleOnSwitch({ _id: item._id, type: "entry" })
                      }
                    >
                      <i class="fa-solid fa-arrow-left"></i>
                    </Button>
                  </td>
                </tr>
              ))}

              <tr>
                <td colSpan={3}>You could gave saved</td>
                <td>{badTotal}hr</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
