import React, { useState } from 'react'
import Button from './Button';
import { Link} from 'react-router-dom'
import { NavLink } from './NavLink';
const Nav = () => {

    let Links =[
        {name:"INICIO", link:"/"},
        {name:"CATALOGO", link:"/catalogo"},
        {name:"CONTACTO", link:"/contacto"},
        {name:"NOSOSTROS", link:"/nosotros"},
    ];
    let [open,setOpen]=useState(false);
    
  return (
    <div className=' shadow-md w-full top-0 left-0 sticky z-30 '>
        <div className='md:flex items-center justify-between py-4 md:px-10 px-7 bg-gradient-to-r from-rose-50 to-rose-300'>
            <Link to='/'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-abc'>

                <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                <img src="src/images/logo_1.png" className=' h-24'/>
                </span>
                <h1 className='text-rose-400 hover:text-sky-400 text-4xl'>Esmeralda Repos</h1>
            </div>
            </Link>
            <div onClick={()=>setOpen(!open)}
            className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-rose-200 bg-opacity-80 md:bg-transparent md:z-auto z-[-1] left-0 w-full
             md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-30 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                            <NavLink to={link.link}  className='text-gray-800 hover:text-sky-400 duration-300'>{link.name}</NavLink>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    </div>
  )
}

export default Nav