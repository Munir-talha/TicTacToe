import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home';
import Footer from './Footer';
function layout() {
  return (
    <div>
<Home/>
<Outlet/>
<Footer/>      
    </div>
  );
}

export default layout
