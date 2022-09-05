import React from "react";
import LineChart from "./LineChart"
import QuestionMark from "../../Assets1/QuestionMark.png"
import CoinsTable from "./CoinsTable"

import { Container, Row, Col, Button } from "react-bootstrap";


function Working() {
  return <section className="workSection" style={{ justifyContent: "center" }}>
    <Container className="WorkCover">
      <Row>
        <Col md={7} className="Work-header">
          <h1 className="work-heading-name">
            How It Works
          </h1>
          <span style={{ paddingBottom: 15 }} className="work-heading">
            Simple & Secure. Search popular coins and start earning.
          </span>

        </Col>

        <Col md={5} sm={5} xs={5} style={{ paddingBottom: 20 }}>
          <img
            src={QuestionMark}
            alt="home pic"
            className="img-fluid homelogo"
            style={{ maxHeight: "300px" }}
          />
        </Col>

      </Row>
    </Container>


    {/* <Container className="table-card" style={{ textAlign: "left" }}>

      <div style={{ padding: "20px 10px" }} >
        <h3>Today's Cryptocurrency Prices by Market Cap</h3>
        <small>Click to expand statistics individually</small>
      </div>
      <Row style={{ padding: "5px 10px", borderBottom: "1px solid grey" }}>
        <Col><strong>#</strong></Col>
        <Col><strong>Name</strong></Col>
        <Col><strong>Price</strong></Col>
        <Col><strong>1h %</strong></Col>
        <Col><strong>24h %</strong></Col>
        <Col><strong>Market Cap</strong></Col>
        <Col><strong>Volume(24h)</strong></Col>
        <Col md={2}><strong>Circulating Supply</strong></Col>
      </Row>

      <Row style={{ padding: "5px 10px" }}>
        <Col><a href="/single_coin">Sample click</a></Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col md={2}>Sample</Col>
      </Row>
      <Row style={{ padding: "5px 10px" }}>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col md={2}>Sample</Col>
      </Row>
      <Row style={{ padding: "5px 10px" }}>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col md={2}>Sample</Col>
      </Row>
      <Row style={{ padding: "5px 10px" }}>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col md={2}>Sample</Col>
      </Row>
      <Row style={{ padding: "5px 10px" }}>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col md={2}>Sample</Col>
      </Row>
      <Row style={{ padding: "5px 10px" }}>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col md={2}>Sample</Col>
      </Row>
      <Row style={{ padding: "5px 10px" }}>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col md={2}>Sample</Col>
      </Row>
      <Row style={{ padding: "5px 10px" }}>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col>Sample</Col>
        <Col md={2}>Sample</Col>
      </Row>



    </Container> */}
    {/* <CoinsTable /> */}


    <div style={{ textAlign: "left", width: "80%" }}>
      <h3>Brief Analytic Charts</h3>
    </div>

    <Container className="table-card" style={{ textAlign: "left" }}>
      <Row>
        <Col md={4} style={{ padding: "30px 20px" }}>
          <div style={{height:"80px",width:"80px", borderRadius:"50%",border:"1px solid black"}} />
          <span style={{lineHeight:"4"}}>Jhinga Metaverse</span>
          <h2 className="chartFont">$22,984.19</h2>
        </Col>
        <Col md={8}>
          <div style={{textAlign:"right", padding:"20px 0px 0px 0px"}}>
            <h2 style={{padding:"0 15%", color:"green"}}>48.1%</h2>
          </div>
          <LineChart />
        </Col>
      </Row>

    </Container>


  </section>
}
export default Working