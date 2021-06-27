import * as React from "react"
import { Link } from "gatsby"


import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"


import { Hero } from "../components/Hero"
import ProductsWester from "../components/ProductsWester"
import Certificates from "../components/Certificates"
import Stats from "../components/Stats"
import Email from "../components/Email"
import TableWester from "../components/dataTables/TableWester";
import PresentationSection from "../components/PresentationSection"






const wester = () => (
  <Layout>
    <SEO title="Wester" />
    <Hero HeaderMark="Продажа и изготовление расширительных баков Wester"/>
    <ProductsWester heading="Wester"/>
    <TableWester />
    <Certificates />
    <PresentationSection />
    <Stats />
    <Email />
    <Link to="/">Go back to the homepage</Link>
    
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default wester

