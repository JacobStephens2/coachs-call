import * as React from "react"
import AthleticVideo from "../videos/AdobeStock-grass-lines-259971257_Video_HD_Preview.mp4"
import { StaticImage } from "gatsby-plugin-image"

const VideoSlowGrass = () => {
  return (
    <span>
      <video className="mobile-hidden" playsInline muted loop>
        <source src={AthleticVideo} type="video/mp4" />
      </video>
      <StaticImage
        className="desktop-hidden darken"
        src="../images/ImageSlowGrass.png"
        alt="Athlete stretching"
        height={750}
        layout="fixed"
      />
    </span>
  )
}

export default VideoSlowGrass