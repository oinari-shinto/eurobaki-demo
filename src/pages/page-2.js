import * as React from "react"
import { Link } from "gatsby"
import { useSpring, animated  } from 'react-spring';

import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"
import Component1 from "../components/Component1"
import Test from "../components/Test";



const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Component1/>
    <Test/>
    
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
