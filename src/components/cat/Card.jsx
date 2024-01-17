import React from 'react'

function Card(params) {

  const src = `./src/images/slide-${params.kk}.jpg`;
  return (
    <div class="wrapper bg-rose-200 antialiased text-gray-900 rounded-3xl border border-rose-300">
        <div>                
            <img src={src} alt=" random imgee" class=" w-auto  object-cover object-center rounded-3xl shadow-md "/>                    
            <div class="relative px-4 -mt-16 py-4 ">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex items-baseline">
                        <span class="bg-teal-200 text-teal-800 text-lg px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            New
                        </span>
                        <div class="ml-2 text-gray-600 uppercase text-lg font-semibold tracking-wider">
                        TAMAÑO  &bull; {params.size}
                        </div>  
                    </div>                
                    <h4 class="mt-1 text-3xl font-semibold uppercase leading-tight truncate text-rose-300">{params.nom}</h4>
                    
                    <div class="mt-1">
                        {params.precio}
                        <span class="text-gray-600 text-sm">   /wk</span>
                    </div>
                    <div class="mt-4">
                        <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
                        <span class="text-sm text-gray-600">(based on 234 ratings)</span>
                    </div>  
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Card