import React from 'react';
import PropTypes from 'prop-types';
import estilos from './index.module.css';
import Mapa from '../Mapa';

const CardMapa = ({ maxWidth, pontoRota, tipoPiso }) => {
    const [posicaoCard, setPosicaoCard] = React.useState(null);
    const cardRef = React.useRef();

    React.useEffect(() => {
        const trocarPosicao = () => {
            const { x, y } = cardRef.current.getBoundingClientRect();
            setPosicaoCard({ x, y });
        }

        trocarPosicao();
        window.addEventListener('resize', trocarPosicao);

        return () => {
            window.removeEventListener('resize', trocarPosicao);
        }
    }, []);

    return (
        <div
            ref={cardRef}
            className={`${estilos.CardMapa} ${tipoPiso ? estilos[tipoPiso] : ''}`}
            style={{ maxWidth: `${maxWidth}px` }}
        >
            <Mapa posicaoCard={posicaoCard} pontoRota={pontoRota} tipoPiso={tipoPiso} />
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
