import * as React from "react"
import { Link } from "gatsby"
import { useSpring, animated  } from 'react-spring';

import Layout from "../layouts/MainLayout"
import SEO from "../components/seo"
import Component1 from "../components/Component1"
import Component2 from "../components/Component2"
import { Hero } from "../components/Hero"
import ProductsWester from "../components/ProductsWester"
import Certificates from "../components/Certificates"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Footer from "../components/Footer"
import { Container, Table } from 'react-bootstrap'




const Wester = () => (
  <Layout>
    <SEO title="Wester" />
    <Hero/>
    <ProductsWester heading="Wester"/>
    <Container>
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
    </Table>
    </Container>
    <Certificates />
    <Stats />
    <Email />
    <Link to="/">Go back to the homepage</Link>
    
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default Wester

