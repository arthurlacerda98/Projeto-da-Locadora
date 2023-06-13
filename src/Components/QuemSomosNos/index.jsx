import locadora from './WhatsApp Image 2023-06-10 at 15.00.52.jpeg'

import './QuemSomosNos.css'

export default function QuemSomosNos () {
    return (
        <section className='quemSomosNos'>
            <h3 className='container__titulo'>Quem somos Nós</h3>
            <div className='container__conteudo__quemSomosNos'>
                <img className='conteudo__imagem' src={locadora} alt="imagem da locadora" />
                <p className='conteudo__texto' >Somos a Jesse Aluguel de Carros, uma empresa líder em serviços de locação de veículos em Caraguatatuba. Com mais de 15 anos de experiência, conquistamos a confiança dos clientes através da nossa autoridade e expertise no setor automotivo. Oferecemos uma frota selecionada de carros confiáveis e bem-mantidos, proporcionando uma experiência de locação de alta qualidade. Nossa equipe altamente treinada está pronta para oferecer um atendimento excepcional, garantindo que nossos clientes encontrem a solução perfeita para suas necessidades de mobilidade. Conte com a Jesse Aluguel de Carros para uma experiência confiável e especializada em aluguel de carros em Caraguatatuba.</p>
            </div>
            <a className='btn--quemSomosNos' href='https://api.whatsapp.com/send?phone=5512997368387&text=Gostaria%20de%20mais%20informações%20sobre%20Locação%20de%20Veículos'>Contate a nossa equipe pelo WhatsApp</a>
        </section>
    )
}