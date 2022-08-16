import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCard2(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{color:"rgb(255, 116, 2)"}}><strong>{props.title}</strong></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{textAlign:"justify"}}>
          <Card.Link className="card-anchor"><strong>Learn More</strong></Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard2;
