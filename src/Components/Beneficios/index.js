import './Beneficios.css'

import flexibilidade from './“My Little World”.png'
import praticidade from './774500f5569664beb3579ae49e8574ae.jpg'
import Liberdade from './praticidae.jpg'
import veículos from './Como escolher a categoria de carro que se encaixa no seu perfil_.png'
import comparação from './e370679f74ce852ffe0d73bd90654a5f.jpg'

import React from 'react'
import EmblaCarousel from '../carrossel/Slides_beneficios/js/EmblaCarousel'
import '../carrossel/Slides_beneficios/css/embala.css'
import '../carrossel/Slides_beneficios/css/sandbox.css'


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export function BeneficiosResponsivo() {
    return (
        <main className="sandbox">
            <h3 className='beneficios__titulo'>Beneficios</h3>
            <section className="sandbox__carousel">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>
        </main>
    )
}

export function Beneficios() {
    return (
        <section className="beneficios">
            <h2 className="beneficios__titulo">Beneficios</h2>
            <div className="beneficios__conteudo">
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front flexibilidade">
                            <img className='front-imagem' src={flexibilidade} />
                            <h3 className='flip-titulo'>Flexibilidade de locomoção</h3>
                        </div>
                        <div class="back">
                            <p className="beneficios__lista__item__texto">
                                O aluguel de carro oferece a flexibilidade de se deslocar de forma independente e conveniente. Você pode ir para onde quiser, quando quiser, sem depender de horários de transporte público ou de terceiros.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front praticidade">
                            <img className='front-imagem' src={praticidade} />
                            <h3 className='flip-titulo'>Conveniência e praticidade</h3>
                        </div>
                        <div class="back">
                            <p className="beneficios__lista__item__texto">
                                Com o aluguel de carro, você evita a necessidade de depender de transporte público ou de aguardar por serviços de transporte. Você tem um veículo disponível imediatamente, o que é especialmente útil para viagens, passeios ou necessidades de mobilidade de curto prazo.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front Liberdade">
                            <img className='front-imagem' src={Liberdade} />
                            <h3 className='flip-titulo'>Liberdade para explorar diferentes destinos</h3>
                        </div>
                        <div class="back">
                            <p className="beneficios__lista__item__texto">
                                Alugar um carro permite que você explore e descubra diferentes lugares, sem restrições de horários ou roteiros fixos. Você pode explorar paisagens naturais, visitar pontos turísticos e cidades vizinhas de forma mais conveniente e personalizada.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front veículos">
                            <img className='front-imagem' src={veículos} />
                            <h3 className='flip-titulo'>Acesso a uma ampla variedade de veículos</h3>
                        </div>
                        <div class="back">
                            <p className="beneficios__lista__item__texto">
                                Com o serviço de aluguel de carro, você tem acesso a uma ampla variedade de veículos, desde compactos e econômicos até SUVs espaçosos ou carros de luxo. Isso permite escolher o veículo mais adequado para suas necessidades específicas de viagem ou preferências pessoais.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front comparação">
                            <img className='front-imagem' src={comparação} />
                            <h3 className='flip-titulo'>Economia em comparação com a compra de um carro</h3>
                        </div>
                        <div class="back">
                            <p className="beneficios__lista__item__texto">
                                O aluguel de carro pode ser uma opção mais econômica do que a compra de um veículo, especialmente para uso ocasional. Você economiza nos custos de manutenção, impostos, seguro e depreciação associados à propriedade de um carro, além de evitar gastos iniciais significativos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <a className='btn--beneficios' href='https://api.whatsapp.com/send?phone=5512997368387&text=Gostaria%20de%20mais%20informações%20sobre%20Locação%20de%20Veículos'>Chame no WhatsApp</a>
        </section>
    )
}

Beneficios()



