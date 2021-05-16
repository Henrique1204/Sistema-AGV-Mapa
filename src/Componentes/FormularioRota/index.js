import React from 'react';
import estilos from './index.module.css';

const pontos = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T'
];

const FormularioRota = ({ pontoRota, setPontoRota, tipoPiso, setTipoPiso }) => {
    return (
        <form className={estilos.FormularioRota}>
            <label htmlFor="pontoRota"  className={estilos.legenda}>
                Escolha o ponto da rota.
            </label>

            <select
                className={estilos.select}
                name="pontoRota"
                id="pontoRota"
                value={pontoRota}
                onChange={({ target }) => setPontoRota(target.value)}
            >
                <option value="">Ponto não definido</option>
                { pontos.map((ponto) => (
                    <option value={ponto} key={ponto}>Ponto: {ponto}</option>
                )) }
            </select>

            <label htmlFor="tipoPiso" className={estilos.legenda}>
                Escolha o tipo do piso.
            </label>

            <select
                className={estilos.select}
                name="tipoPiso"
                id="tipoPiso"
                value={tipoPiso}
                onChange={({ target }) => setTipoPiso(target.value)}
            >
                <option value="">Piso não definido</option>
                <option value="oficina">Oficina</option>
                <option value="grama">Gramado</option>
                <option value="cimento">Cimento</option>
            </select>
        </form>
    );
};

export default FormularioRota;
