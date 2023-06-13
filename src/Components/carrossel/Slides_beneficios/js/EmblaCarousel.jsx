import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import imageByIndex from './imagens'
import textByIndex from './textos'
import '../css/Beneficios.css'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="embla-responsivo">
      <div className="embla__viewport-responsivo" ref={emblaRef}>
        <div className="embla__container-responsivo">
          {slides.map((index) => (
            <div className="embla__slide-responsivo" key={index}>
              <div className="embla__slide__number-responsivo">
                <span>{index + 1}</span>
              </div>
              <div className="beneficios__conteudo-responsivo">
                <div class="flip-container-responsivo">
                  <div class="flipper-responsivo">
                    <div class="front-responsivo flexibilidade">
                      <img className='front-imagem-responsivo' src={imageByIndex(index)} />
                      <h3 className='flip-titulo-responsivo'>{textByIndex(index).front}</h3>
                    </div>
                    <div class="back-responsivo">
                      <p className="beneficios__lista__item__texto-responsivo">
                        {textByIndex(index).back}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a className='btn--beneficios'>Chame no WhatsApp</a>
    </div>
  )
}

export default EmblaCarousel
