//import { useState } from 'react'
//import viteLogo from '/vite.svg'

import styled from "styled-components"
import logo from "./assets/logo.png"
import play from "./assets/seta_play.png"

function App() {
 

  return (
    <>
      <SCcontainerJogo>
        <SCheader>
         <img src={logo} alt="logo"/>
         <p>ZapRecall</p>
        </SCheader>
        

        <SCdeck>
          <li>
            <p>Pergunta 1</p>
            <img src={play} alt="play"/>
          </li>
         
        </SCdeck>
        <SCfooter>
          <p>0/4 CONCLUÍDOS</p>
      </SCfooter>

      </SCcontainerJogo>

    </>
  )
}

export default App


////////////////Styled components///////////////



const SCfooter = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 375px;
  height: 70px;
  background-color: white;
  
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

  };
`;

const SCdeck = styled.ul`
 display: flex;
 flex-direction: column;
 

  li{
    width: 300px;
    height: 4.1rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 25px;

    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;


    img{
      width: 20px;
      height: 23px;
    }
    p{
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;    }
  }
    `;

const SCheader = styled.div`
  width: 100%;
  height: 5.3125rem;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 25px;
  img{
    width: 3.25rem;
  };
  p{
    font-size: 36px;
    font-family: 'Righteous';
    color: white;
  };
`;

const SCcontainerJogo = styled.div`
  width: 23.4375rem;
  height: 41.6875rem;
  background-color: #FB6B6B;

  display: flex;
  flex-direction: column;
  padding-top: 2.62500rem;
  padding-left: 2.3125rem;
  padding-right: 2.3125rem;
  box-sizing: border-box;

  position: relative;

  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border: 1px solid #DBDBDB;
`;





