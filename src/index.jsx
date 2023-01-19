import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';

//pages
import Home from './pages/Home';
// import Lodging, { lodgingDetails } from './pages/Lodging';
import About from './pages/About';
import Error from './pages/ErrorPage'

//router
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

//layouts
import HeaderLayout from './components/HeaderLayout';
import FooterLayout from './components/FooterLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path ="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path='lodging/:id' element={<Lodging />} loader={lodgingDetails} /> */}
          
          <Route path="*" element={<Error />} />
        </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <FooterLayout />
  </React.StrictMode>
);