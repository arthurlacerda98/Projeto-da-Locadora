import { useState } from 'react';
import './PerguntasFrequentes.css'

export default function PerguntasFrequentes() {

    const [data, setData] = useState([{
        pergunta: "Qual o tempo de tolerância para a devolução do carro?",
        reposta: "A devolução do veículo tem o prazo de tolerância de 1h (uma hora) após o horário estipulado, considerando o tempo de abertura do contrato.Caso ultrapasse o tempo de abertura do contrato, o prazo de tolerância de 1h é desconsiderado e será cobrada hora extra no prazo de até 6h (1/6 sobre a tarifa da diária contratada + taxa de serviço).",
        id: 0,
        visible: false
    },
    {
        pergunta: "Posso alugar carro com motorista",
        reposta: "A Unidas oferece o serviço de motorista. Caso haja necessidade, poderá ser contratado um motorista bilíngüe. Obtenha maiores informações pela Central de Reservas Unidas 24 horas pelo número 0800 6 121 121, ou pelo Chat Online.",
        id: 1,
        visible: false
    },
    {
        pergunta: "Quais acessórios eu posso incluir em minha locação?",
        reposta: "É possível adicionar diferentes acessórios a locação mediante pagamento de um valor por diária. São eles: GPS, Bebê Conforto (para crianças de até 1 ano), Cadeira de Bebê (para crianças de 1 a 4 anos) e Assento de Elevação (para crianças de 4 a 7 anos). Com exceção do GPS, a disponibilidade dos acessórios incluídos na reserva deverá ser confirmada pela Central de Reservas 24 horas (0800 6 121 121) ou pelo Chat Online.",
        id: 2,
        visible: false
    },
    {
        pergunta: "Qual o periodo máximo que eu posso ficar com o carro alugado?",
        reposta: "O período máximo para locações feitas por meio do site da Unidas é de 30 dias. Para períodos maiores, é necessário contato prévio direto com a nossa Central de Reservas 24h pelo 0800 6 121 121.",
        id: 3,
        visible: false
    },
    {
        pergunta: "Como são contabilizadas as diárias?",
        reposta: "A cada 24 horas, é contabilizada uma diária de locação. Caso a devolução do veículo ultrapasse o horário previsto, a cada hora extra, será cobrada a razão de 1/6 do valor da diária contratada. Após a sexta hora adicional, será cobrada uma nova diária de locação. Quanto às Proteções Unidas, após a primeira hora de tolerância, será cobrado o valor integral de uma diária da(s) proteção (ões) contratada(s).",
        id: 4,
        visible: false
    },
    {
        pergunta: "Qual é a opção de carro mais barata que tem disponivel?",
        reposta: "Nas últimas duas semanas, usuários do Mundi encontraram muitas ofertas por menos de R$ 91 por dia reservando um carro para alugar com a São Paulo. A melhor oferta encontrada foi de R$ 39 por dia com a Budget, reservado para Jul. 28.",
        id: 5,
        visible: false
    },
    {
        pergunta: "Posso alugar um carro durante um mês?",
        reposta: "Tipicamente, a duração disponível do aluguer de carro depende do inventário do fornecedor. No entanto, consegues alugar um carro durante um mês inteiro em São Paulo.",
        id: 6,
        visible: false
    },
    {
        pergunta: "Qual é o carro que as pessoas mais recomendam para alugar?",
        reposta: "O carro mais popular escolhido por quem viaja para São Paulo é o Economy (Class Economy Car) com base nos nossos dados da Mundi.",
        id: 7,
        visible: false
    }]);

    const handleButtonClick = (id) => {
        const updatedData = data.map((item) => {
            if (item.id === id) {
                return { ...item, visible: !item.visible };
            }
            return item;
        });

        setData(updatedData);
    }

    return (
        <section className='perguntasFrequentes' >
            <h6 className='perguntasFrequentes__titulo' >Alguma duvida?</h6>
            <h3 className='perguntasFrequentes__subtitulo' >Perguntas Frequentes</h3>
            <ul className='perguntasFrequentes__lista' >
                {data.map((item) => (
                    <li key={item.id} className='lista__perguntas' onClick={() => handleButtonClick(item.id)}>
                        <div className='lista__perguntas__botao'>
                            <div className='lista_bota_pergunta'>
                                <p className='lista__perguntas__titulo' >{item.pergunta}</p>
                                <button className='btn--perguntasFrequentes--pergunta' onClick={() => handleButtonClick(item.id)}>&#65088;</button>
                            </div>
                            {item.visible && <span className={`${!item.visible ? 'lista__perguntas__texto' : 'aparecer'}`}>{item.reposta}</span>}
                        </div>
                    </li>
                ))}
            </ul>
            <a className='btn--perguntasFrequentes' href='https://api.whatsapp.com/send?phone=5512997368387&text=Gostaria%20de%20mais%20informações%20sobre%20Locação%20de%20Veículos'>Não deixe para depois, alugue o seu carro agora!</a>
        </section>
    )
}
