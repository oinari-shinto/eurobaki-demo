import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

export default function HeroH1() {
    const fadeIn = useSpring(
        {
            from: { opacity: 0, transform: 'translateY(3rem)' },
            to: { opacity: 1, transform: 'translateY(-1rem)' },
            config: { duration: 1000 }
        }
    )
    return (
        <animated.div style={fadeIn}>
            <HeroH2>Продажа и изготовление расширительных баков</HeroH2>
            <HeroP>Завод производство. Доставка по России</HeroP>
        </animated.div>
    )
}




const HeroH2 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
    padding: 0 1rem;
`
const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 2rem;
    font-weight: 400;
`