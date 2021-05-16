import React from 'react';
import estilos from './index.module.css';
import IconeRobo from '../IconeRobo';

const Mapa = ({ pontoRota, tipoPiso }) => {
    const [posicaoPath, setPosicaoPath] = React.useState(null);
    const pathRef = React.useRef();

    const calcularPosicao = (elemento) => {
        const { x, y, width, height } = elemento.getBoundingClientRect();

        const { curva } = elemento.dataset;
        const arrayFracao = curva?.split(',').map((item) => Number(item)) || [2, 2];

        const xCalculado = x + (width / 4 * arrayFracao[0]);
        const yCalculado = y + (height / 4 * arrayFracao[1]);

        setPosicaoPath({ xCalculado, yCalculado });
    };

    React.useEffect(() => {
        if (pathRef?.current) return calcularPosicao(pathRef.current);

        setPosicaoPath(null);
    }, [pontoRota]);

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
                    ref={pontoRota === 'A' ? pathRef : null}
                    className={`${estilos.ponto} ${pontoRota === 'A' ? estilos.ativo : ''}`}
                    d="M116.215 3.50443C26.8926 3.19492 2.27559 24.3708 3.01608 99.5783"
                    data-curva="1,1"
                />

                <path
                    ref={pontoRota === 'B' ? pathRef : null}
                    className={`${estilos.ponto} ${pontoRota === 'B' ? estilos.ativo : ''}`}
                    d="M114.331 3.5011H255.849"
                />

                <path
                    ref={pontoRota === 'C' ? pathRef : null}
                    className={`${estilos.ponto} ${pontoRota === 'C' ? estilos.ativo : ''}`}
                    d="M255.849 3.5011H397.367"
                />

                <path
                    ref={pontoRota === 'D' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'D' ? estilos.ativo : ''}`}
                    d="M397.366 3.5011H586.057"
                />

                <path
                    ref={pontoRota === 'E' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'E' ? estilos.ativo : ''}`}
                    d="M586.058 3.5011H774.749"
                />

                <path
                    ref={pontoRota === 'F' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'F' ? estilos.ativo : ''}`}
                    d="M774.747 3.5011H916.266"
                />

                <path
                    ref={pontoRota === 'G' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'G' ? estilos.ativo : ''}`}
                    d="M916.268 3.5011H1057.79"
                />

                {/* Segunda Curva (Esquerda - Topo) */}
                <path
                    ref={pontoRota === 'H' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'H' ? estilos.ativo : ''}`}
                    d="M1057.79 3.50162C1147.11 3.19211 1171.72 24.368 1170.98 99.5755"
                    data-curva="3,1"
                />

                <path
                    ref={pontoRota === 'I' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'I' ? estilos.ativo : ''}`}
                    d="M1171 97.7002L1171 238.99"
                />

                <path
                    ref={pontoRota === 'J' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'J' ? estilos.ativo : ''}`}
                    d="M1171 238.991L1171 380.281"
                />

                {/* Terceira Curva (Esquerda - Baixo) */}
                <path
                    ref={pontoRota === 'K' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'K' ? estilos.ativo : ''}`}
                    d="M1057.79 474.462C1147.11 474.772 1171.72 453.596 1170.98 378.388"
                    data-curva="3,3"
                />

                <path
                    ref={pontoRota === 'L' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'L' ? estilos.ativo : ''}`}
                    d="M916.268 474.466H1057.79"
                />

                <path
                    ref={pontoRota === 'M' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'M' ? estilos.ativo : ''}`}
                    d="M774.747 474.466H916.266"
                />

                <path
                    ref={pontoRota === 'N' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'N' ? estilos.ativo : ''}`}
                    d="M586.058 474.466H774.749"
                />

                <path
                    ref={pontoRota === 'O' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'O' ? estilos.ativo : ''}`}
                    d="M397.366 474.466H586.057"
                />

                <path
                    ref={pontoRota === 'P' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'P' ? estilos.ativo : ''}`}
                    d="M255.849 474.466H397.367"
                />

                <path
                    ref={pontoRota === 'Q' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'Q' ? estilos.ativo : ''}`}
                    d="M114.331 474.466H255.849"
                />

                {/* Quarta Curva (Direita - Baixo) */}
                <path
                    ref={pontoRota === 'R' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'R' ? estilos.ativo : ''}`}
                    d="M116.215 474.462C26.8926 474.772 2.27559 453.596 3.01608 378.388"
                    data-curva="1,3"
                />

                <path
                    ref={pontoRota === 'S' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'S' ? estilos.ativo : ''}`}
                    d="M3.00085 238.991L3.00085 380.281"
                />

                <path
                    ref={pontoRota === 'T' ? pathRef : undefined}
                    className={`${estilos.ponto} ${pontoRota === 'T' ? estilos.ativo : ''}`}
                    d="M3.00085 97.7002L3.00085 238.99"
                />
            </svg>
        </>
    );
};

export default Mapa;
