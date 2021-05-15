import React from 'react';
import PropTypes from 'prop-types';
import estilos from './index.module.css';
import Mapa from '../Mapa';

const CardMapa = ({ maxWidth }) => {
    return (
        <div className={estilos.CardMapa} style={{ maxWidth: `${maxWidth}px` }}>
            <Mapa />
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
