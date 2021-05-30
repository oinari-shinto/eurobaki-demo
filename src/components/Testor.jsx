import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Testor() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
      
      <div className="grid">
        <div className="boxes"><h2>Tokyo</h2></div>
        <div className="boxes"><h2>Kyoto</h2></div>
        <div className="boxes"><h2>Osaka</h2></div>
        <div className="boxes"><h2>Okinawa</h2></div>
        <div data-aos="fade-up" className="boxes"><h2>Hokkaido</h2></div>
        
      </div>
    

        
      
      
    )
}



const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}