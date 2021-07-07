import  React, {useRef, useEffect, useState, Component } from "react"
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import SEO from "../components/Seo"
import Component1 from "../components/Component1"

import { gsap } from "gsap";
import Certificates3 from "../components/Certificates3"
import slide1 from '../assets/images/certificates/certificate-wester-1.jpg'
import slide2 from '../assets/images/certificates/certificate-wester-2.jpg'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Carousel } from 'react-bootstrap'
import DropDown from "../components/DropDown"
import { ContactComponent } from "../components/modal/ContactComponent"
import { Button } from "../components/Button"

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

    const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <Layout>
      <DropDown />
      <SEO title="Page two" />
      <div ref={headerRef}>
      <Component1 />
      <Button primary="true" round="true" onClick={openModal} >Оставить заявку</Button>
        <ContactComponent showModal={showModal} setShowModal={setShowModal} />
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
                            
                        </Carousel>
      </div>
      
      
      
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

}

export default SecondPage
