import React, {useEffect} from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import Aos from 'aos'
import "aos/dist/aos.css"

const Certificates = () => {

    const data = useStaticQuery(graphql`
    query  {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["sert_wester_1", "sert_zilmet" ]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)
    
    return (
        <CertificatesContainer>
            <TopLine >Сертификаты</TopLine>
            <Description >Сертификаты на расширительные баки</Description>
            <ContentWrapper>
                <ColumOne >
                    <Certificate >
                        <IoMdCheckmarkCircleOutline css={`
                        color: #3fffa8;
                        font-size: 2rem;
                        margin-bottom: 1rem;`} />
                        <h3>Wester</h3>
                        <p> {" "}
                        The greate tank in my live
                        </p>
                    </Certificate>
                    <Certificate >
                        <FaRegLightbulb css={`
                        color: #f9b19b;
                        font-size: 2rem;
                        margin-bottom: 1rem;`} />
                        <h3>Reflex</h3>
                        <p>The tank in my live</p>
                    </Certificate>
                </ColumOne>
                <ColumTwo>
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid}  />
                    ))}
                </ColumTwo>
            </ContentWrapper>
        </CertificatesContainer>
    )
}

export default Certificates

const CertificatesContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;

`

const TopLine = styled.p`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`

const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    
    
    @media screen and (max-width: 768px) {
        
        grid-template-columns: 1fr;
    }
`

const ColumOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

const Certificate = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p {
        color: #3b3b3b;
    }
`

const ColumTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;
    

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    } 
`

const Images = styled(Img)`
    border-radius: 10px;
    height: 100%;
`





