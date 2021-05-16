import React from 'react';
import PropTypes from 'prop-types';
import estilos from './index.module.css';
import Mapa from '../Mapa';

const CardMapa = ({ maxWidth, pontoRota, tipoPiso }) => {
    return (
        <div
            className={`${estilos.CardMapa} ${tipoPiso ? estilos[tipoPiso] : ''}`}
            style={{ maxWidth: `${maxWidth}px` }}
        >
            <Mapa pontoRota={pontoRota} tipoPiso={tipoPiso} />
        </div>
    );
};

CardMapa.propTypes = {
    maxWidth: PropTypes.number
};

CardMapa.defaultProps = {
    maxWidth: 1200
};

export default CardMapa;
