
import React from "react"
import Savingpig from "../../Assets/savingpig.png"
import { Container, Row, Col } from "react-bootstrap";

function Savings() {
    return (<section>
        <Container fluid className="saving-section" id="home">
            <Container className="saving-content">
                <Row>
                    <Col md={7} className="home-header">

                        <h1 className="heading-name">
                            <strong > JHINGA Savings</strong>
                        </h1>
                        <h6 style={{ paddingBottom: 15 }} className="heading">
                            Simple and Secure. Search popular coins and start earning.
                        </h6>

                    </Col>

                    <Col md={5} sm={5} xs={5} style={{ paddingBottom: 20 }}>
                        <img
                            src={Savingpig}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "280px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    </section>

    )
}
export default Savings;