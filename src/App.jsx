

import styled from "styled-components"
import logo from "./assets/logo.png"
import LogicaViradas from "./LogicaViradas"
import cards from "./Cards"
import { useState } from "react"







export default  function App() {
  const cardsRender = [...cards]
  const [contagemFlash, setContagemFlash] = useState(0)

const resultado = () =>{
  const auxConter = contagemFlash + 1;
  setContagemFlash(auxConter)
  
}

  return (
    <>
<SCMainCOntainer>

      <SCcontainerJogo>

        <SCheader>
         <img src={logo} alt="logo"/>
         <p>ZapRecall</p>
        </SCheader>

          {cardsRender.map((flash, indiceFlash) =>
          <div key={indiceFlash}>
            <LogicaViradas  
                            flash = {flash}
                            indiceFlash = {indiceFlash}
                            resultadoContagem = {resultado}/>
          </div>
        )}

      </SCcontainerJogo>

      <SCfooter >
          <p data-test="footer" >{contagemFlash}/8 CONCLUÍDOS</p>
      </SCfooter>

</SCMainCOntainer>
    </>
  )
}


////////////////Styled components///////////////


const SCMainCOntainer = styled.div`
  position: relative;
`;

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
  overflow: scroll;
  overflow-x: none ;
  ::-webkit-scrollbar{
    width:0;
  }

  display: flex;
  flex-direction: column;
  padding-top: 2.62500rem;
  padding-left: 2.3125rem;
  padding-right: 2.3125rem;
  box-sizing: border-box;
  padding-bottom: 50px;

  position: relative;

  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border: 1px solid #DBDBDB;
`;





