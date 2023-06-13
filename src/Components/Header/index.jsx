import './Header.css'
import React from 'react'
import background from './background.png'
import backgroundResponsivo from './HD-wallpaper-viagem-ao-por-do-sol-carro-celular-cena-praia.jpg'

export default function Header() {

    let x = window.screen.width;

    return (
        <header className='header'>
            <img className='background background-responsivo' src={ x < 800? backgroundResponsivo : background} alt="" />
            <section className='cabecalho'>
                <div className='cabecalho__container'>
                    <div className='cabecalho__conteudo'>
                        <h1 className='cabecalho__conteudo__titulo'>Aluguel de carros e motos de alta qualidade. Sua viagem perfeita começa aqui.</h1>
                        <h3 className='cabecalho__conteudo__subtitulo'>Fuja da burocracia e economize tempo. Aluguel de carro descomplicado em Caraguatatuba. Entre em contato pelo WhatsApp e descubra as melhores opções para você!</h3>
                        <a className='cabecalho__conteudo__botao' href='https://api.whatsapp.com/send?phone=5512997368387&text=Gostaria%20de%20mais%20informações%20sobre%20Locação%20de%20Veículos' >Clique aqui para contatar</a>
                    </div>
                </div>
            </section>
        </header>
    )
}
