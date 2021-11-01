import * as React from "react"

import { Link } from "gatsby"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

import ListItemNoDivider from "./ListItemNoDivider"

const Mentoring = props => {
  return (
    <section id={props.id} className="one-col-section">
      <Container>
        <Col className="sems-and-workshops" lg={7} xxl={7}>
          <h2>{props.heading}</h2>
          <p className="subhead">{props.subheading}</p>
          <ListItemNoDivider
            bold={props.boldList}
            description={props.descriptionList}
            boldTwo={props.boldTwo}
            descriptionTwo={props.descriptionTwo}
            boldThree={props.boldThree}
            descriptionThree={props.descriptionThree}
          />
          <Link to={props.link}>
            <Button className="section-button">{props.buttonText}</Button>
          </Link>
        </Col>
      </Container>
    </section>
  )
}

Mentoring.defaultProps = {
  belowImages: "no",
  quote: "no",
  list: "no",
  button: "no",
  bold: "no",
  endButton: "no",
}

export default Mentoring