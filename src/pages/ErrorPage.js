import { Link } from 'react-router-dom'
import '../style/pages/ErrorPage.css'

export default function Error() {
    return (
        <div className="error-div">
            <p className="error-404">404</p>
            <div className='error-msg'>
                <p className="error-msg1">Oups! La page que&nbsp;</p>
                <p className="error-msg2">vous demandez n'existe pas.</p>
            </div>
            <Link to="/Kasa" className="error-link">Retourner sur la page d'accueil</Link>
        </div>   
    )
}