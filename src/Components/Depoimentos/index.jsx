import React from 'react'
import EmblaCarousel from '../carrossel/Slides_para_rolar/js/EmblaCarousel'
import '../carrossel/Slides_para_rolar/css/embala.css'
import '../carrossel/Slides_para_rolar/css/sandbox.css'
import '../carrossel/Slides_para_rolar/css/Depoimentos.css'

const OPTIONS = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const DepoimentosDeClientes = () => (
  <main className="sandbox">
    <h3 className='depoimentos__titulo'>Clientes Satisfeitos</h3>
    <span className='depoimentos__texto'>O que os clientes dizem sobre nós</span>
    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
    </section>
  </main>
)
export default DepoimentosDeClientes
