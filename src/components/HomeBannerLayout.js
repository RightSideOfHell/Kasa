import homeBanner from '../assets/homeBanner.png';
import { Outlet } from 'react-router-dom';


export default function HomeBannerLayout() {
    return (
        <div className='banner-img'>
            <img src={ homeBanner } alt='home banner' className="home-banner banner-img" />
            <div className='home-banner-text'>
                <p className='home-banner-text1'>Chez vous,&nbsp;</p>
                <p className='home-banner-text2'>partout et ailleurs</p>
            </div>
        <main>
            <Outlet />
        </main>
        </div>
    )
}