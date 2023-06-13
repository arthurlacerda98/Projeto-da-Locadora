import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import textByIndex from './textos'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className="embla-automatico">
      <div className="embla__viewport-automatico" ref={emblaRef}>
        <div className="embla__container-automatico">
          {slides.map((index) => (
            <div className="embla__slide-automatico" key={index}>
              <div className='conteudo__automatico'>
                <div className="embla__slide__number-automatico">
                  <span>{index + 1}</span>
                </div>
                <div>
                  <h6 className='conteudo__automatico__titulo'>{textByIndex(index).objecao}</h6>
                  <span className='conteudo__automatico__texto'>{textByIndex(index).solucao}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
