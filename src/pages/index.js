import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"


import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero"
import Products from "../components/Products"
import Certificates from "../components/Certificates"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const IndexPage = () =>  {
  //let multiPageRef = useRef(null);
  
  useEffect(() => {
    
    gsap.from(".prodAnime", {
      duration: 3,
      autoAlpha: 0,
      ease: 'none',
      delay: 3,
      scrollTrigger: {
        trigger: ".prodAnime",
        start: "top 90%",
        end: "bottom 10%",
        
        markers: true,
        toggleActions: "restart reset restart reset",
      }
    })
    
    }, [])
    return (
    <Layout >
      <div><SEO title="Home" /></div>
      <Hero HeaderMark="Продажа и изготовление расширительных баков"/>
      <div className="prodAnime"><Products heading="Выберите расширительный бак"/></div>
      
      <Certificates  />
      <Stats  />
      <Email />
      
      
      {/* <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
    </Layout>
    )
  }
  

 
export default IndexPage

// const prodSection = styled.div``