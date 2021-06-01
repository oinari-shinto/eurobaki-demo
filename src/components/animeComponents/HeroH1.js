import React, { useState, useEffect } from "react";
import { useSpring, animated, Spring } from 'react-spring';
import styled from 'styled-components';
import VisibilitySensor from "react-visibility-sensor";
import Aos from 'aos';
import "aos/dist/aos.css";


// export default function HeroH1({HeaderMark}) {
    
//     const fadeIn = useSpring(
//         {
//             from: { opacity: 0, transform: 'translateY(3rem)' },
//             to: { opacity: 1, transform: 'translateY(-1rem)' },
//             config: { duration: 1000 }
//         }
//     )

//Anime with scroll and view a part of content after scroll (react-spring)
// const FadeInDirection = ({ isVisible, children }) => {
//     const props = useSpring({
//       opacity: isVisible ? 1 : 0,
//       transform: isVisible ? "translateY(0px)" : "translateY(50px)"
//     });
//     return <animated.div style={props}>{children}</animated.div>;
//   };
  
//   export const FadeInContainer = ({ children }) => {
//     const [isVisible, setVisibility] = useState(false);
  
//     const onChange = visibility => {
//       visibility && setVisibility(visibility);
//     };
  
//     return (
//       <VisibilitySensor onChange={onChange}>
//         <FadeInDirection isVisible={isVisible}>{children}</FadeInDirection>
//       </VisibilitySensor>
//     );
//   };

//       export default function HeroH1({HeaderMark}) {
//         return (
//           <div>
            
//             <FadeInContainer>
//             <HeaderH1>{HeaderMark}</HeaderH1>
//             </FadeInContainer>
      
//           </div>
//         );
//       }


//Animation with Aos

export default function HeroH1({HeaderMark}) {
  
  return (
    <div>
      
      <HeaderH1>{HeaderMark}</HeaderH1>
      <HeroP>Завод производство. Доставка по России</HeroP>

    </div>
    
  );
}



//First animate with react spring
//     if (HeaderMark) {
//         return (           
//         )
//     }
//     else 
//     {
//         return (
//             <animated.div style={fadeIn}>
//                 <HeaderH1>ありがとうございます</HeaderH1>
//                 <HeroP>Завод производство. Доставка по России</HeroP>                
//             </animated.div>
//         )
//     }
// }


/* <animated.div style={fadeIn}>
                <HeaderH1>                
                    {HeaderMark}                    
                </HeaderH1>
                <HeroP>Завод производство. Доставка по России</HeroP>
                
            </animated.div> */


const HeaderH1 = styled.h1`
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