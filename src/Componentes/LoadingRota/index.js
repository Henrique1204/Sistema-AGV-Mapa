import React from 'react';
import estilos from './index.module.css';

const LoadingRota = ({ setLoading }) => {
    React.useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeOut);
    }, [setLoading]);

    return (
        <div className={estilos.LoadingRota}>
            <span className={estilos.spiner}></span>
            <h3>Calculando rota...</h3>
        </div>
    );
};

export default LoadingRota;
