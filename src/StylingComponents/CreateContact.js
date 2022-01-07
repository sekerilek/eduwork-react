import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class CreateContact extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Row className="text-center justify-content-center">
              <Col md="9" lg="7">
                <h3 className="fw-bold display-4">Contact Us</h3>
                <p className="lead">for more information contact us</p>
              </Col>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="text" placeholder="Message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CreateContact;
