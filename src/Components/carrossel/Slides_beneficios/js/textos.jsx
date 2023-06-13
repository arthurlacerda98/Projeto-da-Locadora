export const text = [
    {
        front: "Flexibilidade de locomoção",
        back:"O aluguel de carro oferece a flexibilidade de se deslocar de forma independente e conveniente. Você pode ir para onde quiser, quando quiser, sem depender de horários de transporte público ou de terceiros."
    },
    {
        front: "Conveniência e praticidade",
        back:"Com o aluguel de carro, você evita a necessidade de depender de transporte público ou de aguardar por serviços de transporte. Você tem um veículo disponível imediatamente, o que é especialmente útil para viagens, passeios ou necessidades de mobilidade de curto prazo."
    },
    {
        front: "Liberdade para explorar diferentes destinos",
        back:"Alugar um carro permite que você explore e descubra diferentes lugares, sem restrições de horários ou roteiros fixos. Você pode explorar paisagens naturais, visitar pontos turísticos e cidades vizinhas de forma mais conveniente e personalizada."
    },
    {
        front: "Acesso a uma ampla variedade de veículos",
        back:"Com o serviço de aluguel de carro, você tem acesso a uma ampla variedade de veículos, desde compactos e econômicos até SUVs espaçosos ou carros de luxo. Isso permite escolher o veículo mais adequado para suas necessidades específicas de viagem ou preferências pessoais."
    },
    {
        front: "Economia em comparação com a compra de um carro",
        back:"O aluguel de carro pode ser uma opção mais econômica do que a compra de um veículo, especialmente para uso ocasional. Você economiza nos custos de manutenção, impostos, seguro e depreciação associados à propriedade de um carro, além de evitar gastos iniciais significativos."
    },
]

const textByIndex = (index) => text[index % text.length]

export default textByIndex 

