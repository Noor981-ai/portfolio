import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ayesha Noor</span>{" "}
            from <span className="purple">Faisalabad, Pakistan</span>.
            <br />
            I’m currently studying as a{" "}
            <span className="purple">Computer Science Student</span>{" "}
            <span className="purple">in Government College Women University</span>.
           <br></br>
           <br></br>
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
          
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ayesha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
