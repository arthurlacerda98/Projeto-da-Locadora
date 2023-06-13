// import './QuebraDeObjecoes.css'

// export default function QuebraDeObjecoes() {
//     return (
//         <section className="container__quebraDeObjecoes">
//             
//             <ul className="lista">
//                 <li className="lista__item">
//                     <h6 className="lista__item__titulo">O aluguel de carro é muito caro</h6>
//                     <p className="lista__item__texto">Oferecemos tarifas competitivas e opções de aluguel com excelente custo-benefício. Além disso, ao alugar um carro, você evita custos adicionais associados à posse de um veículo, como seguro, manutenção e depreciação.</p>
//                 </li>
//                 <li className="lista__item">
//                     <h6 className="lista__item__titulo">A burocracia para alugar um carro é complicada</h6>
//                     <p className="lista__item__texto">Simplificamos o processo de aluguel de carro, oferecendo um sistema ágil e descomplicado. Nossa equipe está pronta para auxiliá-lo(a) em todas as etapas, desde a reserva até a devolução, garantindo uma experiência tranquila e sem complicações.</p>
//                 </li>
//                 <li className="lista__item">
//                     <h6 className="lista__item__titulo">Tenho medo de danificar o carro alugado</h6>
//                     <p className="lista__item__texto">Oferecemos veículos em excelente estado de conservação e com seguro abrangente incluído. Caso ocorra algum imprevisto, nossa assistência 24 horas está disponível para ajudá-lo(a). Você pode desfrutar da comodidade de dirigir sem se preocupar com danos inesperados.</p>
//                 </li>
//                 <li className="lista__item">
//                     <h6 className="lista__item__titulo">Não tenho experiência em alugar carros</h6>
//                     <p className="lista__item__texto">Não se preocupe! Nossa equipe altamente capacitada está pronta para fornecer orientações e esclarecer todas as suas dúvidas. Faremos o processo de aluguel ser simples e guiaremos você em cada etapa, garantindo que você tenha uma experiência agradável e sem complicações.</p>
//                 </li>
//                 <li className="lista__item">
//                     <h6 className="lista__item__titulo">Prefiro usar transporte público ou aplicativos de transporte</h6>
//                     <p className="lista__item__texto">Embora o transporte público e os aplicativos de transporte sejam opções populares, alugar um carro oferece maior flexibilidade, privacidade e autonomia para explorar diferentes lugares. Com um veículo alugado, você pode desfrutar de liberdade e conveniência, especialmente em viagens, passeios em família ou quando precisar de deslocamentos personalizados.</p>
//                 </li>
//             </ul>
//     )
// }

import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from '../carrossel/Slides_automatico/js/EmblaCarousel'
import '../carrossel/Slides_automatico/css/embala.css'
import '../carrossel/Slides_automatico/css/sandbox.css'
import '../carrossel/Slides_automatico/css/QuebraDeObjecoes.css'

const OPTIONS = { axis: 'y' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const QuebraDeObjecoes = () => (
  <main className="sandbox-automatico">

    <section className="sandbox__carousel-automatico">
      <h4 className="titulo">"Será que devo alugar o meu carro na Jesse Aluguel de carros?"</h4>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <a className='btn--quebraDeObjecoes' href='https://api.whatsapp.com/send?phone=5512997368387&text=Gostaria%20de%20mais%20informações%20sobre%20Locação%20de%20Veículos'>Participe do nosso grupo de clientes</a>
    </section>

  </main>
)

export default QuebraDeObjecoes