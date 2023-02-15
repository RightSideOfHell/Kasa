import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';

//pages
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import About from './pages/About';
import Error from './pages/ErrorPage'

//layouts
import HeaderLayout from './components/HeaderLayout';
import FooterLayout from './components/FooterLayout';

//router v6.4+
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path ="P7-kasa" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='lodging/:id' element={<Lodging />} />
          
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
