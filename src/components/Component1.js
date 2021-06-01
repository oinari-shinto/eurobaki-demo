import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

export default function Component1() {
  const fadeIn = useSpring (
    {
      from : { opacity: 0 },
      to : { opacity: 1 },
      config : { duration: 5000 }
    }
  )

    return (
      <div>
      
      <div>
      <animated.div style={fadeIn}>

        <h2>Awwwooo</h2>

      </animated.div>
      

         
      </div>

        
      </div>
      
    )
}



const c1Style = {
    background: 'steelblue',
    color: 'white',
    
}

// const AnimatedHeader = styled(animated.h1)`
//     to: { opacity: 1 };
//     from: { opacity: 0 };
//     reset: true;
//     reverse: flip;
//     delay: 200;
//     config: config.molasses;
//     onRest: () => set(!flip);
// `