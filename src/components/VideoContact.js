import * as React from "react"
import AthleticVideo from "../videos/lights.mp4"
import { StaticImage } from "gatsby-plugin-image"

const VideoContact = () => {
  return (
    <>
      <video className="mobile-hidden" autoPlay playsInline muted>
        <source src={AthleticVideo} type="video/mp4" />
      </video>
      <StaticImage
        className="desktop-hidden darken intro-row-image"
        src="../images/track-pan-image.png"
        alt="Athlete stretching"
        height={750}
        layout="constrained"
      />
    </>
  )
}

export default VideoContact
