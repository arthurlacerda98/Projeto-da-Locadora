const text = [
    {
        objecao:"O aluguel de carro é muito caro",
        solucao:"Oferecemos tarifas competitivas e opções de aluguel com excelente custo-benefício. Além disso, ao alugar um carro, você evita custos adicionais associados à posse de um veículo, como seguro, manutenção e depreciação."
    },
    {
        objecao:"A burocracia para alugar um carro é complicada",
        solucao:"Simplificamos o processo de aluguel de carro, oferecendo um sistema ágil e descomplicado. Nossa equipe está pronta para auxiliá-lo(a) em todas as etapas, desde a reserva até a devolução, garantindo uma experiência tranquila e sem complicações."
    },
    {
        objecao:"Tenho medo de danificar o carro alugado",
        solucao:"Oferecemos veículos em excelente estado de conservação e com seguro abrangente incluído. Caso ocorra algum imprevisto, nossa assistência 24 horas está disponível para ajudá-lo(a). Você pode desfrutar da comodidade de dirigir sem se preocupar com danos inesperados."
    },
    {
        objecao:"Não tenho experiência em alugar carros",
        solucao:"Não se preocupe! Nossa equipe altamente capacitada está pronta para fornecer orientações e esclarecer todas as suas dúvidas. Faremos o processo de aluguel ser simples e guiaremos você em cada etapa, garantindo que você tenha uma experiência agradável e sem complicações."
    },
    {
        objecao:"Prefiro usar transporte público ou aplicativos de transporte",
        solucao:"Embora o transporte público e os aplicativos de transporte sejam opções populares, alugar um carro oferece maior flexibilidade, privacidade e autonomia para explorar diferentes lugares. Com um veículo alugado, você pode desfrutar de liberdade e conveniência, especialmente em viagens, passeios em família ou quando precisar de deslocamentos personalizados."
    },
]

const textByIndex = (index) => text[index % text.length]

export default textByIndex