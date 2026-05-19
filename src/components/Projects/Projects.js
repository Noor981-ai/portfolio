import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import admin from "../../Assets/Projects/admin.png";
import spotify from "../../Assets/Projects/spotify.png";
import sell from "../../Assets/Projects/sell.png";
// import commerce from "../../Assets/Projects/commerce.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify"
              description="A simple Spotify clone built with HTML,CSS,JS.Few songs are added."
              ghLink="https://github.com/Noor981-ai/spotifyShort"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sell}
              isBlog={false}
              title="E-commerce Website"
              description="A responsive e-commerce website built with React.js. It includes features like product listing, shopping cart, pagination component, API country support and many more."
              ghLink="https://github.com/Noor981-ai/E-commerce"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Admin Dashboard"
              description="Admin dashboard template built with React.js and Material-UI. It has features like user management,product management. It is a fully responsive dashboard template which can be used for any kind of web application."
              ghLink="https://github.com/Noor981-ai/Admin"
                    
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
