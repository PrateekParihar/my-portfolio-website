import React from "react"
import { AppContext } from "../../context/context"
import SmallBanner from "./SmallBanner"
import Banner from "../Banner"
import Background from "./Background"
import resume from "../../Assets/Resume.pdf"
const HomeBanner = () => {
  const resumeUrl = `${resume}`
  const { size } = React.useContext(AppContext)
  if (size < 776) {
    return (
      <SmallBanner>
        <Banner title="Hi! I'm Prateek. Sr. Software Engineer based in Auburn Hills, Michigan.">


        </Banner>
      
      </SmallBanner>
    )
  }
  return (
    <Background>
      <Banner title="Hi! I'm Prateek. Sr. Software Engineer based in Auburn Hills, Michigan." >  
        <p><a style = {{
          color: "#66ffcc",
          fontSize: "300%",
          fontFamily: "Courier New", 
        }}
        href={resumeUrl}> Resume </a></p> 
          
      </Banner>
    </Background>
  )
}

export default HomeBanner
