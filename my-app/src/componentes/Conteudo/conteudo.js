import React from 'react';
import SecaoCapa from './SecaoCapa/capa';
import Produtos from './SecaoProdutos/Produtos';
import Sobre from './Secaosobre/Sobre';
import Contato from '../SecaoContato/Contato';

export default function Conteudo() {
    return (
        <main>
            <SecaoCapa />
            <Produtos />
            <Sobre />
            <Contato />
        </main>
    )
};