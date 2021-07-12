import * as React from "react"
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"


import { Hero } from "../components/Hero"
import ProductsWester from "../components/ProductsWester"
import Certificates from "../components/CertificatesWester"
import Stats from "../components/Stats"
import Email from "../components/Email"
import TableWester from "../components/dataTables/TableWester";







const Wester = () => (
  <Layout>
    <Seo title="Wester" />
    <Hero HeaderMark="Продажа и изготовление расширительных баков Wester"/>
    <ProductsWester heading="Wester"/>
    <TableWester />
    <Certificates />
    
    <Stats />
    <Email />
    <Link to="/">Go back to the homepage</Link>
    

  </Layout>
)

export default Wester

