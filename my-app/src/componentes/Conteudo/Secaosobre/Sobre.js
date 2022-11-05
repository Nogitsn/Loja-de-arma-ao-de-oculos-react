import React from 'react';
import './sobre.css'

export default function Sobre(){
    return ( 
        <section className='limite-secao' id='sobre'>
            <div className='sobre'>
                <div className='sobre-linhas'>
                    
                    <h2>
                        Quem somos nós?
                    </h2>
                    <p>
                        Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. 
                        Nossas Filiais
                        Hoje temos mais de 20 filiais pelo Brasil e na América
                        Atendimento flexível
                        Nossa equipe possui é treinada para te atender
                    </p>
                </div>

                <div >
                    <div className='box-card-sobre'>
                    <img src='./assets/loja.png' alt='ilustraçao da loja' />

                        <div className='card-sobre-texto'>
                        <h3>
                            Nossas Filiais
                        </h3>

                        <p>
                            Hoje temos mais de 20 filíais pelo Brasil e na América
                        </p>
                        </div>
                    </div>
                    
                    <div className='box-card-sobre'>
                        <div className='card-sobre-texto'>
                          <h3>
                            Atendimento flexível
                        </h3>

                        <p>
                            Nossa equipe possui é treinada para atender
                        </p>  
                        </div>
                    <img src='./assets/atendimento.png' alt='ilustraçao de atendimento' />
                    </div>
                </div>
            </div>
        </section>
    )
}