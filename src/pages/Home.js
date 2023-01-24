import '../style/pages/Home.css'
import BannerLayout from '../components/HomeBannerLayout'
import List from '../components/CardList';
import Footer from '../components/FooterLayout';

export default function Home() {
  return (
    <div className="home-main">
      <BannerLayout />
      <List />
    </div>
  );
}
