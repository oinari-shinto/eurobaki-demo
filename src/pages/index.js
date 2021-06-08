import React, {useEffect} from "react"
import { Link } from "gatsby"

import styled from 'styled-components'
import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero"
import Products from "../components/Products"
import Certificates from "../components/Certificates"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import TableWester from "../components/dataTables/TableWester"
import TableReflex from "../components/dataTables/TableReflex"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 2});




const IndexPage = () =>  {
    const tl = gsap.timeline();
    useEffect(() => {
      
      tl.from('.westerTable', {xPercent: -100})
        .from('.reflexTable', {xPercent: 100});
    
    ScrollTrigger.create({
      animation: tl,
      trigger: ".container",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1
    })
    }, [])
    


    return (
    <Layout >
      <SEO title="Home" />
      <Hero HeaderMark="Продажа и изготовление расширительных баков"/>
      <Products heading="Выберите расширительный бак"/>
      <div className="container">
        <TableWester className="westerTable"/>
        {/* <TableReflex className="reflexTable"/> */}
      </div>
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

const Container = styled.div``