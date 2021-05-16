import React from 'react';
import estilos from './index.module.css';
import IconeRobo from '../IconeRobo';

const Mapa = ({ posicaoCard, pontoRota, tipoPiso, loading }) => {
    const [posicaoPath, setPosicaoPath] = React.useState(null);
    const pathRef = React.useRef();

    const calcularPosicao = React.useCallback((elemento, posicaoInicial) => {
        const { x: posicaoInicialX, y: posicaoInicialY } = posicaoInicial;
        const { x, y, width, height } = elemento.getBoundingClientRect();

        const { curva } = elemento.dataset;
        const [ fracaoX, fracaoY ] = curva?.split(',').map((item) => Number(item)) || [2, 2];

        const xCalculado = (x + (width / 4 * fracaoX)) - posicaoInicialX;
        const yCalculado = (y + (height / 4 * fracaoY)) - posicaoInicialY;

        setPosicaoPath({ xCalculado, yCalculado });
    }, []);

    React.useEffect(() => {
        if (!loading) {
            if (pathRef?.current) return calcularPosicao(pathRef.current, posicaoCard);

            return setPosicaoPath(null);
        }
    }, [loading, calcularPosicao, pontoRota, posicaoCard]);

    return (
        <>
            { posicaoPath && <IconeRobo posicaoPath={posicaoPath} /> }

            <svg 
                className={`${estilos.Mapa} ${tipoPiso ? estilos[tipoPiso] : ''}`}
                viewBox="0 0 1174 477"
                fill="none"
            >
                {/* Primeira Curva (Direita - Topo) */}
                <path
                    ref={pontoRota === 'A' && !loading ? pathRef : null}
                    className={`${estilos.ponto} ${pontoRota === 'A' && !loading ? estilos.ativo : ''}`}
                    d="M116.215 3.50443C26.8926 3.19492 2.27559 24.3708 3.01608 99.5783"
                    data-curva="1,1"
                />

                <path
                    ref={pontoRota === 'B' && !loading ? pathRef : null}
                    className={`${estilos.ponto} ${pontoRota === 'B' && !loading ? estilos.ativo : ''}`}
                    d="M114.331 3.5011H255.849"
                />

                <path
                    ref={pontoRota === 'C' && !loading ? pathRef : null}
                    className={`${estilos.ponto} ${pontoRota === 'C' && !loading ? estilos.ativo : ''}`}
                    d="M255.849 3.5011H397.367"
                />

                <path
                    ref={pontoRota === 'D' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'D' && !loading ? estilos.ativo : ''}`}
                    d="M397.366 3.5011H586.057"
                />

                <path
                    ref={pontoRota === 'E' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'E' && !loading ? estilos.ativo : ''}`}
                    d="M586.058 3.5011H774.749"
                />

                <path
                    ref={pontoRota === 'F' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'F' && !loading ? estilos.ativo : ''}`}
                    d="M774.747 3.5011H916.266"
                />

                <path
                    ref={pontoRota === 'G' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'G' && !loading ? estilos.ativo : ''}`}
                    d="M916.268 3.5011H1057.79"
                />

                {/* Segunda Curva (Esquerda - Topo) */}
                <path
                    ref={pontoRota === 'H' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'H' && !loading ? estilos.ativo : ''}`}
                    d="M1057.79 3.50162C1147.11 3.19211 1171.72 24.368 1170.98 99.5755"
                    data-curva="3,1"
                />

                <path
                    ref={pontoRota === 'I' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'I' && !loading ? estilos.ativo : ''}`}
                    d="M1171 97.7002L1171 238.99"
                />

                <path
                    ref={pontoRota === 'J' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'J' && !loading ? estilos.ativo : ''}`}
                    d="M1171 238.991L1171 380.281"
                />

                {/* Terceira Curva (Esquerda - Baixo) */}
                <path
                    ref={pontoRota === 'K' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'K' && !loading ? estilos.ativo : ''}`}
                    d="M1057.79 474.462C1147.11 474.772 1171.72 453.596 1170.98 378.388"
                    data-curva="3,3"
                />

                <path
                    ref={pontoRota === 'L' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'L' && !loading ? estilos.ativo : ''}`}
                    d="M916.268 474.466H1057.79"
                />

                <path
                    ref={pontoRota === 'M' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'M' && !loading ? estilos.ativo : ''}`}
                    d="M774.747 474.466H916.266"
                />

                <path
                    ref={pontoRota === 'N' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'N' && !loading ? estilos.ativo : ''}`}
                    d="M586.058 474.466H774.749"
                />

                <path
                    ref={pontoRota === 'O' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'O' && !loading ? estilos.ativo : ''}`}
                    d="M397.366 474.466H586.057"
                />

                <path
                    ref={pontoRota === 'P' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'P' && !loading ? estilos.ativo : ''}`}
                    d="M255.849 474.466H397.367"
                />

                <path
                    ref={pontoRota === 'Q' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'Q' && !loading ? estilos.ativo : ''}`}
                    d="M114.331 474.466H255.849"
                />

                {/* Quarta Curva (Direita - Baixo) */}
                <path
                    ref={pontoRota === 'R' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'R' && !loading ? estilos.ativo : ''}`}
                    d="M116.215 474.462C26.8926 474.772 2.27559 453.596 3.01608 378.388"
                    data-curva="1,3"
                />

                <path
                    ref={pontoRota === 'S' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'S' && !loading ? estilos.ativo : ''}`}
                    d="M3.00085 238.991L3.00085 380.281"
                />

                <path
                    ref={pontoRota === 'T' && !loading ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'T' && !loading ? estilos.ativo : ''}`}
                    d="M3.00085 97.7002L3.00085 238.99"
                />
            </svg>
        </>
    );
};

export default Mapa;
