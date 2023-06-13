//imagens de beneficios
import image1 from '../../../Beneficios/774500f5569664beb3579ae49e8574ae.jpg'
import image2 from '../../../Beneficios/Como escolher a categoria de carro que se encaixa no seu perfil_.png'
import image3 from '../../../Beneficios/e370679f74ce852ffe0d73bd90654a5f.jpg'
import image4 from '../../../Beneficios/praticidae.jpg'
import image5 from '../../../Beneficios/“My Little World”.png'

export const images = [image1, image2, image3, image4, image5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex;

//imagem da frota de carros
