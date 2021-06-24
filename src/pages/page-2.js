import  React, {useRef, useEffect, Component } from "react"
import { Link } from "gatsby"


import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"
import Component1 from "../components/Component1"

import { gsap } from "gsap";
import Certificates3 from "../components/Certificates3"
import slide1 from '../assets/images/cert_wester_1.jpg'
import slide2 from '../assets/images/cert_wester_2.jpg'
import slide3 from '../assets/images/cert_zilmet.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Carousel } from 'react-bootstrap'

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
      <Certificates3/>

      </div>
      <div>
        <Carousel>
                            <Carousel.Item>
                                <img css={`height: 450px; weight: 100%`} src={slide1} alt="Certificate Wester"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img css={`height: 450px; weight: 100%`} src={slide2} alt="Certificate Wester2"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                 <img css={`height: 450px; weight: 100%`} src={slide3} alt="Certificate Zilmet"/>
                            </Carousel.Item>
                        </Carousel>
      </div>
      
      
      
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

}

export default SecondPage
