//imagens de beneficios
import image1 from '../../../Depoimentos/Pessoas/depoimento 1.jpg'
import image2 from '../../../Depoimentos/Pessoas/depoimento 2.jpg'
import image3 from '../../../Depoimentos/Pessoas/depoimento 3.jpg'
import image4 from '../../../Depoimentos/Pessoas/depoimento 4.jpg'
import image5 from '../../../Depoimentos/Pessoas/depoimento 5.jpg'

export const images = [image1, image2, image3, image4, image5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex;

//imagem da frota de carros
