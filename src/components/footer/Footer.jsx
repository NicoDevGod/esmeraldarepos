import React from 'react'
import ItemsContainer from './ItemsContainer'
import SocialIcon from './SocialIcon'
import {Icons} from './Menus'

function Footer() {
  return (
    <footer className=' bg-gray-900 text-white z-[2]'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 '>
          <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold 
            md:w-2/5'>Déjanos tu correo para avisarte de nuevos <span className=' text-rose-400'>sabores</span></h1>
            <div>
              <input type="text" placeholder='Ingresa tu correo..' className=' text-gray-800
               sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none font-abc'/>
              <button className='bg-rose-400 hover:bg-rose-600 duration-300 px-5 py-2.5 font-abc rounded-md text-white w-full md:w-auto'>Enviar</button>
            </div>
        </div>
        <ItemsContainer/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-lg pb-8'>
          <span>@  Copyright EsmeraldaRepos 2023.</span>
          <span>Reservados todos los derechos.</span>
          <SocialIcon Icons = {Icons}/>
        </div>
    </footer>
  )
}

export default Footer