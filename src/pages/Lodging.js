import '../style/pages/Lodging.css'
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import Apts from '../datas/Apts.json'
import ShowHide from'../components/ToggleText'
import Error from './ErrorPage';
import Carousel from '../components/Carousel';



export default function Lodging() {
    const { id } = useParams(window.location.href)
    const apt = Apts.find((object) => object.id === id)
    if (!apt) return <Error />
    const {rating} = apt
    

    return (
        <div className="apt">
            <Carousel />
            <div className='apt_preview'>
                <div className='apt_preview_left'>
                    <h1 className='preview_title'>{apt.title}</h1>
                    <p className="preview_location">{apt.location}</p>
                    <div className='apt_tags'>{ apt.tags.map((tag, index) => {
                        return <span key={index} className="tag">{ tag }</span>
                    }) }</div>
                </div>
                <div className='apt_preview_right'>
                    <div className='description_owner'>
                        <p className='owners_name'>{ apt.host.name }</p>
                        <img src={ apt.host.picture } className='owners_pic' alt="owner" />
                    </div>
                    <Rating ratings={rating}/>
                </div>
            </div>
            <div className='card_content'>
                <div className='card_content_right'>
                    <ShowHide title="Description" content={ apt.description } />
                </div>
                <div className='card_content_left'>
                    <ShowHide title="Equipements" content={ apt.equipments.map((equipement, index) => {
                        return (<div key={ index } className="equipement_list">{ equipement }</div>)
                    })}/>                   
                </div>
            </div>
        </div>
    );
}