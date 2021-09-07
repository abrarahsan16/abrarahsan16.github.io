import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Typewriter";
import About from "./About";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there!
              </h1>
              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Abrar Ahsan!</strong>
              </h1>
              <h2 className="heading">And welcome to my page!</h2>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
