import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from "react";

function BackTopButton () {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50){
            setVisible(true)
        } 
        else if (scrolled <= 50){
            setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <div className="top-button">
            <FontAwesomeIcon icon='arrow-up' size="2x" onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}}/>
            <p style={{display: visible ? 'inline' : 'none'}}>Top</p>
        </div>
    );
}
export default BackTopButton;

