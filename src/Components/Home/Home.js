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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#386fa4"
          fill-opacity="1"
          d="M0,32L48,32C96,32,192,32,288,32C384,32,480,32,576,42.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Home;
