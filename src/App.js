import React from 'react';
import './App.css';
import SessaoConteudo from './Componentes/SessaoConteudo';
import CardMapa from './Componentes/CardMapa';

const App = () => {
  return (
    <>
      <SessaoConteudo titulo="Primeiro Teste">
        <CardMapa />
      </SessaoConteudo>
    </>
  );
};

export default App;
