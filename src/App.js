import React from 'react';
import './App.css';
import SessaoConteudo from './Componentes/SessaoConteudo';
import FormularioRota from './Componentes/FormularioRota';
import CardMapa from './Componentes/CardMapa';

const App = () => {
  const [pontoRota, setPontoRota] = React.useState('');
  const [tipoPiso, setTipoPiso] = React.useState('');

  return (
    <SessaoConteudo titulo="Rota com SVG">
      <FormularioRota
        pontoRota={pontoRota} setPontoRota={setPontoRota}
        tipoPiso={tipoPiso} setTipoPiso={setTipoPiso}
      />

      <CardMapa pontoRota={pontoRota} tipoPiso={tipoPiso} />
    </SessaoConteudo>
  );
};

export default App;
