import React from 'react';
import estilos from './index.module.css';

const SessaoConteudo = ({ titulo, children }) => {
    return (
        <section className={estilos.SessaoConteudo}>
            <h1>{titulo}</h1>
            {children}
        </section>
    );
};

export default SessaoConteudo;
