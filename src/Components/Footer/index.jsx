import './Footer.css'

export default function Footer() {
    return (
        <footer className="rodape">
            <div className="rodape__item">
                <span className="rodape__item__tipo">Contatos</span>
                <ul className="rodape__lista">
                    <li className="rodape__lista__item"><a className='instagram' href='https://www.instagram.com/jessealugueldecarroscaragua/'>Instagram</a></li>
                    <li className="rodape__lista__item"><a className='whatsapp' href='https://api.whatsapp.com/send?phone=5512997368387&text=Gostaria%20de%20mais%20informações%20sobre%20Locação%20de%20Veículos'>WhatsApp</a> </li>
                    <li className="rodape__lista__item"><span className='telephone'>Telefone: 12 99736-8387</span></li>
                    <li className="rodape__lista__item"><a className='email' href='mailto:contato@jessealugueldecarros.com.br'>Mande sua mensagem por e-mail</a></li>
                </ul>
            </div>
            <div className="rodape__item">
                <span className="rodape__item__tipo">Endereço</span>
                <span className="rodape__item__endereco">
                    <a href="https://goo.gl/maps/uBXbSZRhKdey2Mei8" className='endereco'>Av. Goiás, 778 - Indaiá,</a>
                    <a href="https://goo.gl/maps/uBXbSZRhKdey2Mei8" className='endereco'>Caraguatatuba - SP</a>
                    <span>Ao lado da ESTRELA DO LAR E</span>
                    <span>AUTOZONE</span>
                </span>
            </div>
            <div className="rodape__item">
                <span className="rodape__item__tipo">Horario de atendimento</span>
                <p className="rodape__titulo hora-de-funcionamento">Funcionamento da loja:</p>
                <ul className="rodape__lista">
                    <li className="rodape__lista__item"><p>Segunda a sexta: 08h às 18h</p></li>
                    <li className="rodape__lista__item"><p>Plantão Via WhatsApp: 24 horas</p></li>
                </ul>
            </div>
        </footer>
    )
}