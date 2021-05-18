import React from 'react'
import styled, { keyframes } from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import { Button } from './Button'
import { resetWarningCache } from 'prop-types'
import {ImLocation} from 'react-icons/im'
import Link from 'gatsby-link'

const Products = ({ heading }) => {
const data = useStaticQuery(graphql`
 query ProductsQuery {
    allProductsJson {
      edges {
        node {
          alt
          button
          name
          link
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      
    }
  }
`)
// for productImg
// src={item.node.img.childImageSharp.fluid}
function getProducts(data) {
    const productsArray = []
    data.allProductsJson.edges.forEach((item, index) => {
        productsArray.push(
            <ProductCard key={index}>
                <Link to={item.node.link}>
                <ProductImg 
                    
                     alt={item.node.alt}
                     fluid={item.node.img.childImageSharp.fluid}/>
                </Link>
                <ProductInfo>
                  <TextWrap>
                    <ImLocation />
                    <ProductTitle to="/Wester">{item.node.name}</ProductTitle>
                  </TextWrap>
                  <Button to='/products' primary="true" round="true"
                  css={`
                  position: absolute; 
                  top: 320px;
                  font-size: 14px;
                  `}>
                  {item.node.button}</Button>
                </ProductInfo>
            </ProductCard>
        )
    })
    return productsArray
}
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>{getProducts(data)}</ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products

const animateOpacity = keyframes`
  0% {
    opacity: -1;
  }
  100% {
    opacity: 1;
  }

`;

const animatePosition = keyframes`
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
  }
`

const ProductsContainer = styled.div`
    min-height: 50vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: transparent ;
    color: #fff;
`
const ProductsHeading = styled.div`
    animation: ${animateOpacity} 5s  , ${animatePosition} 2s ;
    font-size: clamp(1.2rem, 5vw, 3rem);
    margin-bottom: 5rem;
    text-align: center;
    color: #000;
`
const ProductsWrapper = styled.div`
  animation: ${animateOpacity} 5s  , ${animatePosition} 2s ;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
   /* 100% if i want see image */
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`
const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(90%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`


const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  } 
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 275px;
`

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
