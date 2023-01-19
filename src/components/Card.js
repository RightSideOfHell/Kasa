// import Apts from '../datas/Apts.json'
import { Link } from 'react-router-dom';
import '../style/components/card.css'
import Apts from '../datas/Apts.json'


export default function Card () {
    return (
        <div className="apt-card">
           {Apts.map((apt) => (
            <Link to={`lodging/${apt.id}`} key={apt.id} className="apt-card-div">
            <div className='card'>
                <img src={apt.cover} alt={apt.title} className='card-img'></img>
                <p className='card-title'>{apt.title}</p>
            </div>
            </Link>
            ))}
        </div>
    );
}