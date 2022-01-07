import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

class CreateCover extends React.Component {
  render() {
    return (
      <div className="cover">
        <Container>
          <Row className="justify-content-md-center text-center align-items-center">
            <Col md="6">
              <h1 className="display-4 text-light mb-2 mt-5">
                <strong>Wildan Ramadhan</strong>
              </h1>
              <p className="lead text-light mb-3">code enthusiast</p>
              <a
                href="#"
                className="btn btn-outline-light btn-round m-2 btn-lg"
              >
                Linkedin
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateCover;
