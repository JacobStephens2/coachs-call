import * as React from "react"

import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const CoachQuote = props => {
  return (
    <section className="coachquote-section one-col-section">
      <Container>
        <Col sm={12} md={10} lg={8} xl={7} className="coachquote-column">
          <blockquote>{props.quote}”</blockquote>
          <cite>{props.source}</cite>
        </Col>
      </Container>
    </section>
  )
}

export default CoachQuote
