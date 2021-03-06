import * as React from "react"

import PropTypes from "prop-types"

import Header from "./headerRow"
import FooterComponent from "./FooterComponent"

import BottomBar from "../components/BottomBar"

import "../styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children, props }) => {
  return (
    <div id="outer-container">
      <Header siteTitle="Coach's Call" />
      <main id="page-wrap">
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          <main>{children}</main>
          <BottomBar />
        </div>
        <FooterComponent />
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
