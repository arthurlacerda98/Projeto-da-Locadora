const perguntas = [
    {
        pergunta:"Qual o tempo de tolerância para a devolução do carro?",
        reposta:"A devolução do veículo tem o prazo de tolerância de 1h (uma hora) após o horário estipulado, considerando o tempo de abertura do contrato.Caso ultrapasse o tempo de abertura do contrato, o prazo de tolerância de 1h é desconsiderado e será cobrada hora extra no prazo de até 6h (1/6 sobre a tarifa da diária contratada + taxa de serviço)."
    },
    {
        pergunta:"Posso alugar carro com motorista",
        reposta:"A Unidas oferece o serviço de motorista. Caso haja necessidade, poderá ser contratado um motorista bilíngüe. Obtenha maiores informações pela Central de Reservas Unidas 24 horas pelo número 0800 6 121 121, ou pelo Chat Online."
    },
    {
        pergunta:"Quais acessórios eu posso incluir em minha locação?",
        reposta:"É possível adicionar diferentes acessórios a locação mediante pagamento de um valor por diária. São eles: GPS, Bebê Conforto (para crianças de até 1 ano), Cadeira de Bebê (para crianças de 1 a 4 anos) e Assento de Elevação (para crianças de 4 a 7 anos). Com exceção do GPS, a disponibilidade dos acessórios incluídos na reserva deverá ser confirmada pela Central de Reservas 24 horas (0800 6 121 121) ou pelo Chat Online."
    },
    {
        pergunta:"Qual o periodo máximo que eu posso ficar com o carro alugado?",
        reposta:"O período máximo para locações feitas por meio do site da Unidas é de 30 dias. Para períodos maiores, é necessário contato prévio direto com a nossa Central de Reservas 24h pelo 0800 6 121 121."
    },
    {
        pergunta:"Como são contabilizadas as diárias?",
        reposta:"A cada 24 horas, é contabilizada uma diária de locação. Caso a devolução do veículo ultrapasse o horário previsto, a cada hora extra, será cobrada a razão de 1/6 do valor da diária contratada. Após a sexta hora adicional, será cobrada uma nova diária de locação. Quanto às Proteções Unidas, após a primeira hora de tolerância, será cobrado o valor integral de uma diária da(s) proteção (ões) contratada(s)."
    },
    {
        pergunta:"Qual é a opção de carro mais barata que tem disponivel?",
        reposta:"Nas últimas duas semanas, usuários do Mundi encontraram muitas ofertas por menos de R$ 91 por dia reservando um carro para alugar com a São Paulo. A melhor oferta encontrada foi de R$ 39 por dia com a Budget, reservado para Jul. 28."
    },
    {
        pergunta:"Posso alugar um carro durante um mês?",
        reposta:"Tipicamente, a duração disponível do aluguer de carro depende do inventário do fornecedor. No entanto, consegues alugar um carro durante um mês inteiro em São Paulo."
    },
    {
        pergunta:"Qual é o carro que as pessoas mais recomendam para alugar?",
        reposta:"O carro mais popular escolhido por quem viaja para São Paulo é o Economy (Class Economy Car) com base nos nossos dados da Mundi."
    }
]

const textByIndex = (index) => perguntas[index % perguntas.length]

export default textByIndex