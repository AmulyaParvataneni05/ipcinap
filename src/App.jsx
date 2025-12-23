import './App.css'
import React from 'react';
import RootLayout from './RootLayout';
import RoutingError from './RoutingError';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Locations from './Components/Locations/Locations';
import AreaDetails from './Components/Locations/Description/AreaDetails';
import ContactUs from './Components/ContactUs/ContactUs';
import OurMinistry from './Components/OurMinistry/OurMinistry';
import ZBC from './Components/OurMinistry/ZBC/ZBC'; 
import Gallery from './Components/Gallery/Gallery';
import { HeaderFooterProvider } from './HeaderFooterContext';
import Conventions from './Components/OurMinistry/Conventions/Conventions';
import PPTChacko from './Components/Home/Founders/PPTChacko';
import APMSamuel from './Components/Home/Founders/APMSamuel';
function App(){
  const browserRouter = createBrowserRouter([
    {
      path:'/',
      element: <RootLayout/>,
      errorElement : <RoutingError/>,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/ourministry',
          element: <OurMinistry/>
        },
        {
          path: '/locations',
          element:<Locations />
        },
        {
          path:'/area-details/:index',
          element:<AreaDetails />
        },
        {
          path:'/gallery',
          element:<Gallery/>
        },
        {
          path: '/contact',
          element: <ContactUs />
        },
        {
          path:'/ZBC',
          element:<ZBC/>
        },
        {
          path:'/Conventions',
          element:<Conventions/>
        },
        {
          path:'/Apostle-P-M-Samuel',
          element:<APMSamuel/>
        },
        {
          path:'/P-T-Chacko',
          element:<PPTChacko/>
        },
      ],
    },
  ]);
  return(
    <HeaderFooterProvider>
      <RouterProvider router={browserRouter}/>
    </HeaderFooterProvider>
  );
}
export default App;