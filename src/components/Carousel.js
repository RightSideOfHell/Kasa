import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../style/components/carousel.css'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import Apts from '../datas/Apts.json'

export default function Carousel () {
// ----------- Fetch les données de l'appartement -----------//
    const { id } = useParams(window.location.href)
    const apt = Apts.find((object) => object.id === id)
// ---------------------------------------------------------//

// ------------------- Infinite carousel ------------------- //
    const picture = apt.pictures
    const [current, setCurrent] = useState(0)
    const slideLeft = () => {
        setCurrent(current === 0 ? picture.length - 1 : current - 1)
    }
    const slideRight = () => {
        setCurrent(current === picture.length - 1 ? 0 : current + 1)   
    }
// --------------------------------------------------------- //
    
    return (
        <div className="carousel">
            <div className='carousel_wrapper'>
                { apt.pictures.map((picture, index) =>{
                    return <div 
                    key={ index } 
                    className={
                        index === current 
                        ? "carousel_card carousel_card-active" 
                        : "carousel_card"
                        }>
                        <img src={ picture } alt="carousel" className='carousel_pic'/>
                        <div className='card_overlay'></div>
                    </div>
                    }
                )}
            </div>
            <img src={ leftArrow } alt='left arrow' className={ apt.pictures.length < 2 ? "carousel_arrow_none" : "carousel_arrow_left" } onClick={ slideLeft }/>
            <img src={ rightArrow } alt='right arrow' className={ apt.pictures.length < 2 ? "carousel_arrow_none" : "carousel_arrow_right" } onClick={ slideRight }/>
            <div className='carousel_pagination'>
                <p>{ current + 1 }/{ apt.pictures.length }</p>
            </div>
        </div>
    )
}
