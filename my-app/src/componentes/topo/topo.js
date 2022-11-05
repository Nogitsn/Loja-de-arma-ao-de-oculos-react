import React from 'react';
import './Topo.css';

export default function Topo() {
    return(
        <header className='limite-secao'>
            <div>
                <img src='assets/logo.png' alt='imagem de um oculos a direita e nome com logo' />

                <nav>
                    <a href='#produtos'>PRODUTOS</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#contato'>CONTATO</a>
                </nav>
            </div>
        </header>
    )
};