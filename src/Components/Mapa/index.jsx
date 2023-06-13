import { color } from 'framer-motion'
import './Mapa.css'

export default function Mapa () {
    return (
        <section className="mapa">
            <h3 className='mapa__titulo'>Onde estamos localizados</h3>
            <iframe className='mapa-imagem' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.374645448573!2d-45.425761124886364!3d-23.6267504639974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd63d2ab61424d%3A0xcd74d88b97583dc9!2sJESS%C3%89%20ALUGUEL%20DE%20CARROS%20E%20MOTOS!5e0!3m2!1spt-BR!2sbr!4v1686230604969!5m2!1spt-BR!2sbr" style={{allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </section>
    )
}