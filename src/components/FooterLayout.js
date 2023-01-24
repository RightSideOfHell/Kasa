import '../style/components/footer.css';
import logoFooter from '../assets/logoFooter.png';


export default function Footer() {
    return (
        <footer className="footer">
            <img src={ logoFooter } alt='kasa logo' className='footer-logo'></img>
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}