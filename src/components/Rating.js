import fullStar from '../assets/fullStar.png'
import emptyStar from '../assets/emptyStar.png'


export default function Rating({ratings}) {
    const range = [1, 2, 3, 4, 5];

    return(
        <div className='ratingStars'>
            {range.map((rangeElem, index) => 
                rangeElem <= ratings ?
                (<img src={fullStar} className="star" alt="full star" key={index}/>
                ) : (
                <img src={emptyStar} className="star" alt="empty star" key={index}/>
                )
                )}
        </div>
    )
}