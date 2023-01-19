import '../style/pages/Lodging.css'
// import lodgingImg from '../assets/lodgingImg.png'



/* -------------------------------------- With Loader/ npm stall Json-Server -------------------------------------- //
// require to install json-server -g on an other port. 
// Hooks
import { useLoaderData, useParams } from 'react-router-dom';


export default function Lodging() {
    const { id } = useParams()
    const apt = useLoaderData()
    console.log(apt)

    return (
        <div className="apt-card">
           <div className="lodging-main">
              <img src={ lodgingImg } alt='lodging banner' className="banner-img" />
              <p>description:</p>
            </div>
        </div>
    );
}


// loader function -- Can be put anywhere else for reduced coding sake ((components/Imports.js)e.g), and imported //
export const lodgingDetails = async ({ params }) => {
    const { id } = params
    
    const res = await fetch('http://localhost:4000/lodging/' + id)
    return res.json();
}
// -------------------------------------- With Loader/ npm stall Json-Server -------------------------------------- */
 






// ---------------------------------------------------------------------------- //
// import Apts from '../datas/Apts.json'


// export default function Lodging() {
//     return (
//         <div className="apt-card">
//            {Apts.map((apt) => (
//             <div className="lodging-main">
//               <img src={lodgingImg} alt='lodging banner' className="banner-img" />
//               <h1 className='apt-title'>{apt.title}</h1>
//             </div>
//             ))}
//         </div>
//     );
// }