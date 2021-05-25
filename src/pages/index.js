import * as React from "react"
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero"
import Products from "../components/Products"
import Certificates from "../components/Certificates"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero HeroH1=" "/>
    <Products heading="Выберите расширительный бак"/>
    <Certificates />
    <Stats />
    <Email />
    
    
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
