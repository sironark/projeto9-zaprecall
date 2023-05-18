//import { useState } from 'react'
//import viteLogo from '/vite.svg'

import styled from "styled-components"
import logo from "./assets/logo.png"

function App() {
 

  return (
    <>
      <ContainerJogo>
       
        <Header>
         <img src={logo} alt="logo"/>
         <p>ZapRecall</p>
        </Header>
        

        <Deck>
          
        </Deck>

      </ContainerJogo>
    </>
  )
}

export default App

const ContainerJogo = styled.div`
  width: 23.4375rem;
  height: 41.6875rem;
  background-color: #FB6B6B;

  display: flex;
  flex-direction: column;
  padding-top: 2.62500rem;
  padding-left: 2.3125rem;
  padding-right: 2.3125rem;
  box-sizing: border-box;
`;

const Header = styled.div`
  width: 100%;
  height: 5.3125rem;
  
  display: flex;
  justify-content: space-around;
  align-items: center;

  img{
    width: 3.25rem;
  };
  p{
    font-size: 36px;
    font-family: 'Righteous';
    color: white;
  };
`;

const Deck = styled.ul`

`;

