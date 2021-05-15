import React from 'react';
import estilos from './index.module.css';
import IconeRobo from '../IconeRobo';

const Mapa = () => {
    const [pathAtivo, setPathAtivo] = React.useState('A');
    const [posicaoRobo, setPosicaoRobo] = React.useState(null);
    const pathRef = React.useRef();

    const calcularPosicao = (elemento) => {
        const { x, y, width, height } = elemento.getBoundingClientRect();

        const { curva } = elemento.dataset;
        const arrayFracao = curva?.split(',').map((item) => Number(item)) || [2, 2];

        const xCalculado = x + (width / 4 * arrayFracao[0]);
        const yCalculado = y + (height / 4 * arrayFracao[1]);

        setPosicaoRobo({ xCalculado, yCalculado });
    };

    React.useEffect(() => {
        pathRef.current.classList.add(estilos.ativo);
        calcularPosicao(pathRef.current);

        let indice = 0;
        const pontos = [
            'A', 'B', 'C', 'D', 'E',
            'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O',
            'P', 'Q', 'R', 'S', 'T'
        ];

        const intervalo = setInterval(() => {
            pathRef.current.classList.remove(estilos.ativo);

            indice++;
            if (indice === pontos.length) indice = 0;

            setPathAtivo(pontos[indice]);
            pathRef.current.classList.add(estilos.ativo);
            calcularPosicao(pathRef.current);
        }, 2 * 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <>
            { posicaoRobo && <IconeRobo posicaoPonto={posicaoRobo} /> }
            <svg  className={estilos.Mapa} viewBox="0 0 1174 477" fill="none">
                {/* Primeira Curva (Direita - Topo) */}
                <path
                    ref={pathAtivo === 'A' ? pathRef : null}
                    className={estilos.ponto}
                    d="M116.215 3.50443C26.8926 3.19492 2.27559 24.3708 3.01608 99.5783"
                    data-curva="1,1"
                />

                <path
                    ref={pathAtivo === 'B' ? pathRef : null}
                    className={estilos.ponto}
                    d="M114.331 3.5011H255.849"
                />

                <path
                    ref={pathAtivo === 'C' ? pathRef : null}
                    className={estilos.ponto}
                    d="M255.849 3.5011H397.367"
                />

                <path
                    ref={pathAtivo === 'D' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M397.366 3.5011H586.057"
                />

                <path
                    ref={pathAtivo === 'E' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M586.058 3.5011H774.749"
                />

                <path
                    ref={pathAtivo === 'F' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M774.747 3.5011H916.266"
                />

                <path
                    ref={pathAtivo === 'G' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M916.268 3.5011H1057.79"
                />

                {/* Segunda Curva (Esquerda - Topo) */}
                <path
                    ref={pathAtivo === 'H' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M1057.79 3.50162C1147.11 3.19211 1171.72 24.368 1170.98 99.5755"
                    data-curva="3,1"
                />

                <path
                    ref={pathAtivo === 'I' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M1171 97.7002L1171 238.99"
                />

                <path
                    ref={pathAtivo === 'J' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M1171 238.991L1171 380.281"
                />

                {/* Terceira Curva (Esquerda - Baixo) */}
                <path
                    ref={pathAtivo === 'K' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M1057.79 474.462C1147.11 474.772 1171.72 453.596 1170.98 378.388"
                    data-curva="3,3"
                />

                <path
                    ref={pathAtivo === 'L' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M916.268 474.466H1057.79"
                />

                <path
                    ref={pathAtivo === 'M' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M774.747 474.466H916.266"
                />

                <path
                    ref={pathAtivo === 'N' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M586.058 474.466H774.749"
                />

                <path
                    ref={pathAtivo === 'O' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M397.366 474.466H586.057"
                />

                <path
                    ref={pathAtivo === 'P' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M255.849 474.466H397.367"
                />

                <path
                    ref={pathAtivo === 'Q' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M114.331 474.466H255.849"
                />

                {/* Terceira Curva (Direita - Baixo) */}
                <path
                    ref={pathAtivo === 'R' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M116.215 474.462C26.8926 474.772 2.27559 453.596 3.01608 378.388"
                    data-curva="1,3"
                />

                <path
                    ref={pathAtivo === 'S' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M3.00085 238.991L3.00085 380.281"
                />

                <path
                    ref={pathAtivo === 'T' ? pathRef : undefined}
                    className={estilos.ponto}
                    d="M3.00085 97.7002L3.00085 238.99"
                />
            </svg>
        </>
    );
};

export default Mapa;
