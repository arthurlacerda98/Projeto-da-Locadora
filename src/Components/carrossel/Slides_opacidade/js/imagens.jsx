//imagens de beneficios
import image1 from '../../../Frota_de_carros/imagensDosCarros/carro1.png'
import image2 from '../../../Frota_de_carros/imagensDosCarros/carro2.png'
import image3 from '../../../Frota_de_carros/imagensDosCarros/carro3.png'
import image4 from '../../../Frota_de_carros/imagensDosCarros/carro4.png'
import image5 from '../../../Frota_de_carros/imagensDosCarros/carro5.png'
import image6 from '../../../Frota_de_carros/imagensDosCarros/carro6.png'
import image7 from '../../../Frota_de_carros/imagensDosCarros/carro7.png'
import image8 from '../../../Frota_de_carros/imagensDosCarros/carro8.png'
import image9 from '../../../Frota_de_carros/imagensDosCarros/carro9.png'
import image10 from '../../../Frota_de_carros/imagensDosCarros/carro10.png'
import image11 from '../../../Frota_de_carros/imagensDosCarros/carro11.png'

export const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex;

//imagem da frota de carros
