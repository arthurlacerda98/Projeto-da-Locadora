import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { flushSync } from 'react-dom'
import imageByIndex from './imagens'
import textByIndex from './textos'

const TWEEN_FACTOR = 4.2

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [tweenValues, setTweenValues] = useState([])

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
      return numberWithinRange(tweenValue, 0, 1)
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return

    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className="embla-opacidade">
      <h3 className='carrossel-titulo'>Nossa frota</h3>
      <div className="embla__viewport-opacidade" ref={emblaRef}>
        <div className="embla__container-opacidade">
          {slides.map((index) => (
            <div
              className="embla__slide-opacidade"
              key={index}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] }),
              }}
            >
              <div className="embla__slide__number-opacidade">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img-opacidade"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
              <div className='card__caracteristicas'>
                <h6 className='caracteristicas__nome'>{textByIndex(index).nome}</h6>
                <div>
                  <span className='caracteristicas__descricao assento'>{textByIndex(index).passageiros}</span>
                  <span className='caracteristicas__descricao porta-malas'>{textByIndex(index).carga}</span>
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
