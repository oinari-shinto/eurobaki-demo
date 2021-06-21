import  React, {useRef, useEffect, Component } from "react"
import { Link } from "gatsby"


import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"
import Component1 from "../components/Component1"

import { gsap } from "gsap";
import Certificates2 from "../components/Certificates2"



const SecondPage = () =>  {
  let headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 3,
      autoAlpha: 0,
      ease: 'none',
      delay: 3
    })
    
    }, [])
  return (
    <Layout>
      <SEO title="Page two" />
      <div ref={headerRef}>
      <Component1 />
      {/* <Certificates2/> */}

      </div>
      
      
      
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

}

export default SecondPage
