import React from 'react';
import PropTypes from 'prop-types';
import estilos from './index.module.css';

const CardMapa = ({ width }) => {
    return (
        <div className={estilos.CardMapa} style={{ width: `${width}px` }}>
            
        </div>
    );
};

CardMapa.propTypes = {
    width: PropTypes.number
};

CardMapa.defaultProps = {
    width: 1100
};

export default CardMapa;
