import { useState } from 'react'
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2em;
`;

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;

const Preco = styled.span`
  background: #53d956;
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;



const App = () => {

  return (
    <>
      <ProdutosContainer>
        <Produto>
          <Titulo>
            Notebook <Preco>R$ 1999</Preco>
          </Titulo>
          <Comprar>Comprar</Comprar>
        </Produto>
        <Produto>
          <Titulo>
            Smartphone <Preco>R$ 2999</Preco>
          </Titulo>
          <Comprar>Comprar</Comprar>
        </Produto>
      </ProdutosContainer>
    </>

  )
}

export default App
