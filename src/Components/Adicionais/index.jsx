import semCartaoDeCredito from './sem-cartao-de-credito.png'
import semPegadinhas from './caixa-surpresa.png'
import seguroJovemCondutor from './seguranca.png'
import atendimentoPersonalizado from './bate-papo-online.png'

import './Adicionais.css'

export default function Adicionais () {
    return (
        <section className='adicionais'>
            <ul className='adicionais__lista'>
                <li className='adicionais__lista__item'>
                    <img className='adicionais__lista__item__imagem' src={semPegadinhas} alt="Imagem correspondente ao texto" />
                    <h6 className='adicionais__lista__item__titulo'>Sem pegadinhas</h6>
                    <p className='adicionais__lista__item__texto'>Sem taxas adicionais. Clareza em toda negociação do início ao fim!</p>
                </li>
                <li className='adicionais__lista__item' >
                    <img className='adicionais__lista__item__imagem' src={semCartaoDeCredito} alt="Imagem correspondente ao texto" />
                    <h6 className='adicionais__lista__item__titulo'>Não precisa de cartão de crédito</h6>
                    <p className='adicionais__lista__item__texto'>Aqui na Jesse Aluguel de Carros você não precisa de ter Cartão de credito para fazer a sua locação. </p>
                </li>
                <li className='adicionais__lista__item' >
                    <img className='adicionais__lista__item__imagem' src={seguroJovemCondutor} alt="Imagem correspondente ao texto" />
                    <h6 className='adicionais__lista__item__titulo'>Seguro Jovem Condutor</h6>
                    <p className='adicionais__lista__item__texto'>Temos opção para locação de veiculos para jovens condutores co menos de 2 anos de habilitação e 21 anos.</p>
                </li>
                <li className='adicionais__lista__item' >
                    <img className='adicionais__lista__item__imagem' src={atendimentoPersonalizado} alt="Imagem correspondente ao texto" />
                    <h6 className='adicionais__lista__item__titulo'>Atendimento personalizado</h6>
                    <p className='adicionais__lista__item__texto'>Um atendimento diferenciado, flexivel e personalizado, por que cada cliente aqui é único!</p>
                </li>
            </ul>
        </section>
    )
}