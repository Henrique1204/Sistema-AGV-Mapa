import React from 'react';
import estilos from './index.module.css';
import svgRobo from '../../Assets/robo.svg';

const IconeRobo = ({ posicaoPonto }) => {
    const [posicao, setPosicao] = React.useState({ x: 0, y: 0 });
    const [movendo, setMovendo] = React.useState(false);
    const iconeRef = React.useRef();

    React.useEffect(() => {        
        const { width, height } = iconeRef.current.getBoundingClientRect();
        const { xCalculado, yCalculado } = posicaoPonto;

        setPosicao({ x: xCalculado - width / 2, y: yCalculado - height / 2 });

        const timeOut = setTimeout(() => setMovendo(true), 1);

        return () => clearTimeout(timeOut);
    }, [posicaoPonto, setPosicao]);

    return (
        <div
            ref={iconeRef}
            className={`${estilos.IconeRobo} ${(movendo) ? estilos.movendo : ''}`}
            style={{
                transform: `translate3d(${posicao.x}px, ${posicao.y}px, 0)`
            }}
        >
            <img className={estilos.imgRobo} src={svgRobo} alt="Localização do robô" />
        </div>
    );
};

export default IconeRobo;
