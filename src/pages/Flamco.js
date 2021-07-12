import React from "react"
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"


import { Hero } from "../components/Hero"
import ProductsWester from "../components/ProductsWester"
import Certificates from "../components/CertificatesFlamco"
import Stats from "../components/Stats"
import Email from "../components/Email"
import TableFlamco from "../components/dataTables/TableFlamco";







const Flamco = () => (
  <Layout>
    <Seo title="Flamco" />
    <Hero HeaderMark="Продажа и изготовление расширительных баков Flamco"/>
    <ProductsWester heading="Flamco"/>
    <TableFlamco />
    <Certificates />
    
    <Stats />
    <Email />
    <Link to="/">Go back to the homepage</Link>
    
   
  </Layout>
)

export default Flamco