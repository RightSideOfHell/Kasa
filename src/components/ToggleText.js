import { useState } from "react";
import '../style/components/toggleText.css'
import downArrow from '../assets/downArrow.png'
import upArrow from '../assets/upArrow.png'



export default function ShowHide({ title, content }) {
    const [showText, setShowText] = useState(false);

    return(
        <div className="toggle">
            <div className="toggle-bar">
                <h2 className="toggle-title">{ title }</h2>
                <div className="toggle-animation" onClick={() =>
                    setShowText(!showText)}>
                    {showText ? (
                        <img src={ upArrow } alt="flèche du haut" className="arrow" />
                    ) :
                        (<img src={ downArrow } alt="flèche du bas" className="arrow" />
                    )}
                </div>                
            </div>
            {showText && 
            <div className="toggle-content">{ content }</div>}
        </div>
    );
}