import React from 'react';
import './App.css';
import SessaoConteudo from './Componentes/SessaoConteudo';
import FormularioRota from './Componentes/FormularioRota';
import CardMapa from './Componentes/CardMapa';

const App = () => {
  const [pontoRota, setPontoRota] = React.useState('');
  const [tipoPiso, setTipoPiso] = React.useState('');
  const [loading, setLoading] = React.useState(null);

  return (
    <SessaoConteudo titulo="Rota com SVG">
      <FormularioRota
        pontoRota={pontoRota} setPontoRota={setPontoRota}
        tipoPiso={tipoPiso} setTipoPiso={setTipoPiso}
        loading={loading} setLoading={setLoading}
      />

      <CardMapa
        pontoRota={pontoRota} tipoPiso={tipoPiso}
        loading={loading} setLoading={setLoading}  
      />
    </SessaoConteudo>
  );
};

export default App;
