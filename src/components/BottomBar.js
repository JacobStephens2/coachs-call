import * as React from "react"
import CardSlim from "../components/CardSlim"
import Row from "react-bootstrap/Row"

import "./BottomBarStyle.css"

const BottomBar = () => {
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    window.onscroll = function () {
      const bottomBar = document.querySelector(".bottom-bar")
      var scrollPos = window.pageYOffset
      if (scrollPos > 0) {
        bottomBar.classList.add("slideOut")
        bottomBar.classList.remove("slideIn")
      } else {
        bottomBar.classList.add("slideIn")
        bottomBar.classList.remove("slideOut")
      }
    }
  }

  return (
    <Row id="animated-example" className="bottom-bar animated">
      <div className="header-bar"></div>
      <CardSlim link="/about" category="About" id="aboutCard" />
      <CardSlim link="/work" category="Work" id="workCard" />
      <CardSlim link="/contact" category="Contact" id="contactCard" />
    </Row>
  )
}

export default BottomBar
