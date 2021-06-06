import  React, {useRef, useEffect} from "react"
import { Link } from "gatsby"


import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"
import Component1 from "../components/Component1"
import Test from "../components/Test";
import { gsap } from "gsap";



const SecondPage = () =>  {
  let headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 3,
      autoAlpha: 0,
      ease: 'none',
      delay: 3
    })
    
    }, [])
  return (
    <Layout>
      <SEO title="Page two" />
      <div ref={headerRef}>
      <Component1 />

      </div>
      
      
      
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

}

export default SecondPage
