import React from 'react'

interface Paragraphs {
  heading: string,
  p2: string,
  p3: string,
  banner: string
}
const Hero = ({heading,p2,p3, banner}: Paragraphs) => {
  return (
        <section className={banner}>
            <h1>{heading}</h1>
            <p>{p2}</p>
            <p>{p3}</p>
        </section>
  )
}

export default Hero;