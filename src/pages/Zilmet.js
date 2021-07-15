import * as React from "react"
import { Link } from "gatsby"


import Layout from "../layouts/Layout"
import Seo from "../components/SEO"


import { Hero } from "../components/Hero"
import ProductsZilmet from "../components/ProductsZilmet"
import Certificates from "../components/CertificatesZilmet"
import { Stats } from "../components/Stats"
import Email from "../components/Email"


import TableZilmet from "../components/dataTables/TableZilmet"






const Zilmet = () => (
  <Layout>
    <Seo title="Zilmet" />
    <Hero HeaderMark="Продажа и изготовление расширительных баков Zilmet"/>
    <ProductsZilmet heading="Zilmet"/>
    <TableZilmet />
    <Certificates />
    
    <Stats />
    <Email />
    <Link to="/">Go back to the homepage</Link>
    
    
  </Layout>
)

export default Zilmet