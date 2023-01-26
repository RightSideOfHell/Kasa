import '../style/pages/About.css'
import aboutImg from '../assets/aboutImg.png'
import ToggleText from'../components/ToggleText'


export default function About() {
  return (
      <div className="about-main">
        <img src={ aboutImg } alt='mountain banner' className="banner-img about-banner" />
        <div className="toggle_list">
          <ToggleText title='Fiabilité' content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
          <ToggleText title='Respect' content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exlusion de notre plateforme." />
          <ToggleText title='Service' content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaire. N'hésitez pas à nous contacter si vous avez la moindre question" />
          <ToggleText title='Responsabilité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />  
        </div>
      </div>
  );
}