import './App.css';
import Header from './Components/Header';
import Servicos from './Components/Servicos';
import DepoimentosDeClientes from './Components/Depoimentos';
import QuebraDeObjecoes from './Components/QuebraDeObjecoes';
import QuemSomosNos from './Components/QuemSomosNos';
import PerguntasFrequentes from './Components/PerguntasFrequentes';
import Footer from './Components/Footer';
import FrotaDeCarros from './Components/Frota_de_carros';
import Mapa from './Components/Mapa';
import Adicionais from './Components/Adicionais';
import { BeneficiosResponsivo, Beneficios } from './Components/Beneficios';

function App() {

  let x = window.screen.width;

  console.log(x)

  return (
    <div className="App">
      <Header />
      <Adicionais />
      { x < 800? <BeneficiosResponsivo /> : <Beneficios/>}
      <Servicos />
      <FrotaDeCarros />
      <DepoimentosDeClientes />
      <QuebraDeObjecoes />
      <QuemSomosNos />
      <Mapa />
      <PerguntasFrequentes />
      <Footer />
    </div>
  );
}

export default App;
