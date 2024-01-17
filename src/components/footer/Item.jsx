import React from 'react'

const Item = ({Links,title}) => {
  return (
    <ul>
        <h1 className='mb-1 font-semibold'>{title}</h1>
        {
            Links.map((link)=>(
                <li key={link.name}>
                    <a className=' text-gray-400 hover:text-rose-400 duration-300 text-1xl md:text-2xl cursor-pointer leading-6' href={link.links}>{link.name}</a>
                </li>
            ))
        }
    </ul>
  )
}

export default Item