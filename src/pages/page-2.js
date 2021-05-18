import * as React from "react"
import { Link } from "gatsby"
import { useSpring, animated  } from 'react-spring';

import Layout from "../layouts/MainLayout"
import SEO from "../components/seo"
import Component1 from "../components/Component1"
import Component2 from "../components/Component2"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Component1/>
    <Component2/>
    
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
