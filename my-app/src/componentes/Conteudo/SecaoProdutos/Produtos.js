import React from 'react';
import './produtos.css'

export default function Produtos(){
    return (
        <section className='limite-secao'>
            <div className='limite-produto' id='produtos'>
                <h2>
                    NOSSOS PRODUTOS
                </h2>
                <p>
                    Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
                </p>
                <p>
                    Todos os nossos preços são acessiveis e contam com a melhor qualidade do mercado.
                </p>
            </div>
            <div className='card-conteiner'>
                <div className='box-produtos'>
                    <h3>
                    Óculos de Grau
                    </h3>
                    <img src='./assets/oculos01.png' alt='Oculos de grau modelo'/>

                    <p>
                        R$ 500.00
                    </p>
                </div>

                <div className='box-produtos'>
                    <h3>
                    Óculos transition
                    </h3>

                    <img src='./assets/oculos02.png' alt='oculos transition modelo' />
                    <p>
                    R$ 750.00
                    </p>
                </div>        

                <div className='box-produtos'>
                    <h3>
                        Óculos de sol
                    </h3>
                    <img src='./assets/oculos03.png' alt='Oculos de sol' />
                    <p>
                        R$ 700.00
                    </p>
                </div>

                <div className='box-produtos'>
                    <h3>
                        Óculos infantil
                    </h3>

                    <img src='./assets/oculos04.png' alt='Oculos infantil' />
                    <p>
                        R$ 500.00
                    </p>
                </div>
            </div>

            <div className='lista'>
                <p>
                    TODOS OS NOSSO PRODUTOS INCLUEM:
                </p>

                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutemção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}