import './Servicos.css'

import servico1_imagem from './servico1-imagem.jpg'
import servico2_imagem from './servico2-imagem.jpg'
import servico3_imagem from './servico3-imagem.jpg'
import servico4_imagem from './servico4-imagem.jpg'

export default function Servicos() {
    return (
        <section className="servicos">
            <h3 className="servicos__titulo">Serviços</h3>
            <ul className="servicos__lista">
                <li className="servicos__lista__item">
                    <div className='fundo_imagem fundo-imagem1'>
                        <img className='servicos__imagem' src={servico1_imagem} alt='' />
                    </div>
                    <div>
                        <h4 className='servicos__lista__item__titulo'>Aluguel de carros</h4>
                        <span className="servicos__lista__item__texto">
                            Oferecemos o serviço de aluguel de carros, proporcionando a você a liberdade e a conveniência de ter um veículo disponível quando precisar. Nossa frota diversificada oferece opções para diferentes necessidades, desde carros compactos e econômicos até veículos maiores e mais luxuosos. O aluguel de carros é ideal para viagens, passeios turísticos, necessidades de mobilidade temporária ou simplesmente para desfrutar da liberdade de dirigir.
                        </span>
                    </div>
                </li>
                <li className="servicos__lista__item">
                    <div className='fundo_imagem fundo-imagem2'>
                        <img className='servicos__imagem' src={servico2_imagem} alt='' />
                    </div>
                    <div>
                        <h4 className='servicos__lista__item__titulo'>Aluguel de motos</h4>
                        <span className="servicos__lista__item__texto">
                            Se você prefere a emoção de pilotar uma moto, oferecemos o serviço de aluguel de motos. Nossa frota inclui diferentes modelos de motocicletas, desde scooters ágeis e econômicas até motos esportivas potentes. O aluguel de motos é perfeito para explorar a cidade, fazer passeios em estradas cênicas ou simplesmente desfrutar da sensação de liberdade sobre duas rodas.
                        </span>
                    </div>
                </li>
                <li className="servicos__lista__item">
                    <div className='fundo_imagem fundo-imagem3'>
                        <img className='servicos__imagem' src={servico3_imagem} alt='' />
                    </div>
                    <div>
                        <h4 className='servicos__lista__item__titulo'>Aluguel de carros para motoristas de aplicativos</h4>
                        <span className="servicos__lista__item__texto">
                            Se você é um motorista de aplicativo ou está pensando em se tornar um, oferecemos o serviço de aluguel de carros especialmente voltado para essa atividade. Fornecemos veículos adequados para motoristas de aplicativo, com condições e tarifas especiais. Alugar um carro para motoristas de aplicativo permite que você inicie ou amplie seu negócio com facilidade, sem se preocupar com os altos custos de aquisição e manutenção de um veículo próprio.
                        </span>
                    </div>
                </li>
                <li className="servicos__lista__item">
                    <div className='fundo_imagem fundo-imagem4'>
                        <img className='servicos__imagem' src={servico4_imagem} alt='' />
                    </div>
                    <div>
                        <h4 className='servicos__lista__item__titulo'>Atendimento instantaneo</h4>
                        <span className="servicos__lista__item__texto">
                            Valorizamos a rapidez e a eficiência no atendimento aos nossos clientes. Nosso serviço de atendimento instantâneo garante que suas necessidades sejam atendidas de forma ágil e oportuna. Nossa equipe está pronta para responder às suas perguntas, fornecer informações detalhadas, ajudá-lo na escolha do veículo certo e agilizar o processo de reserva. Priorizamos a satisfação do cliente, oferecendo um atendimento de qualidade desde o momento em que você entra em contato conosco.
                        </span>
                    </div>
                </li>
            </ul>
            <a className='btn--servicos' href='https://api.whatsapp.com/send?phone=5512997368387&text=Gostaria%20de%20mais%20informações%20sobre%20Locação%20de%20Veículos'>Alugue agora o seu carro</a>
        </section>
    )
}