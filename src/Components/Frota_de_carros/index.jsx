// // //import dos carros
// import carro1 from './imagensDosCarros/carro1.png'
// import carro4 from './imagensDosCarros/carro4.png'
// import carro3 from './imagensDosCarros/carro3.png'

// import './Frota_de_carros.css'

// export default function FrotaDeCarros() {
//   return (
//     <>
//       <section className="container container--personalizacao">
//         <h3 className='carrossel-titulo'>Nossa Frota</h3>
//         <div className='container__conteudo'>
//           <div className='container__card'>
//             <div className='container__card__conteudo'>
//               <img className='card__imagem' src={carro1} alt="imagem dos carros pertencentes a frota" />
//             </div>
//             <div className='card__caracteristicas'>
//               <h6 className='caracteristicas__nome'>Ka sedan 1.5 automatico</h6>
//               <div>
//                 <span className='caracteristicas__descricao assento'>5 lugares</span>
//                 <span className='caracteristicas__descricao porta-malas'>2 Malas grandes</span>
//               </div>
//             </div>
//           </div>
//           <div className='container__card'>
//             <div className='container__card__conteudo'>
//               <img className='card__imagem' src={carro4} alt="imagem dos carros pertencentes a frota" />
//             </div>
//             <div className='card__caracteristicas'>
//               <h6 className='caracteristicas__nome'>Toro 1.8 automatica</h6>
//               <div>
//                 <span className='caracteristicas__descricao assento'>5 lugares</span>
//                 <span className='caracteristicas__descricao porta-malas'>3 Malas grandes</span>
//               </div>
//             </div>
//           </div>
//           <div className='container__card'>
//             <div className='container__card__conteudo'>
//               <img className='card__imagem' src={carro3} alt="imagem dos carros pertencentes a frota" />
//             </div>
//             <div className='card__caracteristicas'>
//               <h6 className='caracteristicas__nome'>Fluence 1.6 automatico</h6>
//               <div>
//                 <span className='caracteristicas__descricao assento'>5 lugares</span>
//                 <span className='caracteristicas__descricao porta-malas'>2 Malas grandes</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <a className='frota__btn' href=''>Conheça a frota inteira</a>
//       </section>
//     </>
//   );
// }

import React from 'react'
import EmblaCarousel from '../carrossel/Slides_opacidade/js/EmblaCarousel'
import '../carrossel/Slides_opacidade/css/embala.css'
import './Frota_de_carros.css'
import '../carrossel/Slides_opacidade/css/sandbox.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 11
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const FrotaDeCarros = () => (
  <main className="sandbox-opacidade">
    <section className="sandbox__carousel-opacidade">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
)

export default FrotaDeCarros
