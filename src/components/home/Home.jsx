import React from 'react'
import { useState } from 'react'
import Wave from './Wave'
import EmblaCarousel  from '../embla/EmblaCarousel'

const OPTIONS = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
function Home() {
  return (
    <div>       
    <br></br>
    <Wave/>
    <br></br>

    <div className='sandbox z-[2]'>
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </div>
    <br></br>
    </div>
  )
}

export default Home