import React from 'react'
import Card from './Card'

function Catalogo() {
  return (
    <div className='py-4 px-4   md:flex md:justify-between '>
      <div> </div>
      <Card precio='$600' size='Personal' kk='1' nom='CUPCAKE'></Card>
      <div> </div>
      <Card precio='$600' size='mediano' kk='4' nom='RADIOUS CUPCAKE'></Card>
      <div> </div>
      <Card precio='$600' size='grande' kk='3' nom='BIG CUPCAKE'></Card>
      <div> </div>
    </div>
  )
}

export default Catalogo