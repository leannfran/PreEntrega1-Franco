import React from 'react';
import Cart from '../CartShop/Cart'
import Typography from '@mui/material/Typography'
import Categorias from './Categorias'
const Navbar = () => {
    return (
    <div className='nav__bar' >
      <header className='header'>
            <Typography variant="h1" color="initial"> fronfitnes</Typography>
            <input className='buscar' type="text" placeholder='Buscar...' />

           <Cart cantCarrito={10}/> 


      </header>
      
        <ul className="header__ul">
               <Categorias/>
        </ul>
     
    </div>
    );
}

export default Navbar;
