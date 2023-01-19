import { useState } from "react";
import '../style/components/toggleText.css'
import downArrow from '../assets/downArrow.png'
import upArrow from '../assets/upArrow.png'



export default function ShowHide({ title, content }) {
    const [showText, setShowText] = useState(true);

    return(
        <div className="toggle">
            <div className="toggle-bar">
                <h3 className="toggle-title">{title}</h3>
                <img src={downArrow} alt="flèche du bas" className="downArrow" onClick={() =>
                setShowText(!showText)
                } />
            </div>
            {showText && <p className="toggle-content">{ content }</p>}
        </div>
    );
}