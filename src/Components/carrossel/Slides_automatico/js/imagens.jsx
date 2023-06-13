import image1 from '../../../Beneficios/Como escolher a categoria de carro que se encaixa no seu perfil_.png'
import image2 from '../../../Beneficios/Como escolher a categoria de carro que se encaixa no seu perfil_.png'
import image3 from '../../../Beneficios/Como escolher a categoria de carro que se encaixa no seu perfil_.png'
import image4 from '../../../Beneficios/Como escolher a categoria de carro que se encaixa no seu perfil_.png'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
