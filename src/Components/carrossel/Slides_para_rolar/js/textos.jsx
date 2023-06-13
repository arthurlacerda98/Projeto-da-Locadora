export const text = [
    '"Estou muito satisfeito com o aluguel de carro da Jesse Aluguel de Carros. O processo foi simples e rápido, e o veículo estava em perfeitas condições. Recomendo a todos que precisam de um carro confiável e de qualidade."', 

    '"O atendimento instantâneo da Jesse Aluguel de Carros é excepcional! Responderam rapidamente a todas as minhas dúvidas e me ajudaram a escolher o carro ideal para a minha viagem. Serviço de alta qualidade!"',

    '"Como motorista de aplicativo, o aluguel de carros da Jesse Aluguel de Carros foi a solução perfeita para o meu negócio. Veículos em ótimo estado, condições especiais e um suporte incrível. Recomendo a todos os motoristas!"',

    '"O serviço de aluguel de motos da Jesse Aluguel de Carros é excelente! Tive uma experiência incrível pilotando uma moto nova e bem cuidada. Com certeza alugarei novamente!"',

    '"Alugar um carro com a Jesse Aluguel de Carros foi incrível! Eles possuem uma variedade de veículos em ótimo estado e um atendimento impecável. Recomendo a todos"'
]

const textByIndex = (index) => text[index % text.length]

export default textByIndex 

