import React from 'react'

const SocialIcon = ({Icons}) => {
  return (
    <div className='text-rose-500'>
        {Icons.map(icon=>(
          <span key={icon.name} className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-5xl hover:text-gray-100
          hover:bg-rose-500 duration-300 w-12 h-12'>
            <ion-icon name={icon.name}></ion-icon>
          </span>
        ))}
    </div>
  )
}

export default SocialIcon