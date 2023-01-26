import '../style/pages/Home.css'
import BannerLayout from '../components/HomeBannerLayout'
import CardList from '../components/CardList';

export default function Home() {
  return (
    <div className="home-main">
      <BannerLayout />
      <CardList />
    </div>
  );
}
