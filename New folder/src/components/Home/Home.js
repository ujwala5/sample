import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import home from "../../Assets/home-2.png";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <img
                src={home}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "150px", paddingLeft:"45px" }}
              />
              <h1 className="heading-name">
                <strong > Jhinga Token</strong>
              </h1>
              <h6 style={{ paddingBottom: 15 }} className="heading">
                Welcome to Crypto JHINGA, your currency for the blockchain universe. A reliable Stablecoin which is perpetually pegged to the INR.
              </h6>

            </Col>

            <Col md={5} sm={5} xs={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid homelogo"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
