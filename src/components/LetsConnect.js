import * as React from "react"

import { Link } from "gatsby"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import "./LetsConnectStyle.css"

const LetsConnect = () => {
  return (
    <section className="one-col-section">
      <Container className="lets-connect">
        <h2>Let’s Connect</h2>
        <p>
          “As iron sharpens iron, so one person sharpens another.”{" "}
          <cite className="connect-cite">Proverbs 27:1</cite>
        </p>
        <Col>
          <span className="contact-text">
            <p>
              <a href="tel:484.574.1444">
                <i className="fas fa-phone-alt"></i>
                &ensp; 484.574.1444
              </a>
            </p>
            <p>
              <a href="mailto:john@coachscall.org">
                <i className="far fa-envelope"></i>
                &ensp; john@coachscall.org
              </a>
            </p>
          </span>
        </Col>

        <Link to="/contact">
          <Button>CONTACT JOHN</Button>
        </Link>
      </Container>
    </section>
  )
}

export default LetsConnect
