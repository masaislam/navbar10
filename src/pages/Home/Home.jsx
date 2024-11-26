import React, { forwardRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { CiMenuBurger } from "react-icons/ci";

export default function Home() {
  return (
    <div>
      <Navbar/>
      
      <CiMenuBurger/> 
    </div>
  );
}
