import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Typewriter";
//import About from "./About";
//import Experiences from "./Experience";
//import Projects from "./Projects";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
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

            <Col md={4} style={{ paddingBottom: 15 }}>
              <h1 className="home-header">Insert selfie</h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
