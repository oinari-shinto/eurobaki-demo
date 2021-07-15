import React from "react"


import styled from 'styled-components'
import Layout from "../layouts/Layout"
import Seo from "../components/SEO"
import { Hero } from "../components/Hero"
import Products from "../components/Products"
import Certificates from "../components/CertificatesWester"
import { Stats } from "../components/Stats"
/* import Email from "../components/Email"

import 'bootstrap/dist/css/bootstrap.min.css'; */






const IndexPage = () =>  {

    return (
    <Layout >
      <Seo title="Home" />
      <Hero HeaderMark="Продажа и изготовление расширительных баков"/>
      <Products heading="Выберите расширительный бак"/>
      <Certificates  />
      <Stats  />
      {/* <Email /> */}
      

    </Layout>
    )
  }
  

 
export default IndexPage

const Container = styled.div``