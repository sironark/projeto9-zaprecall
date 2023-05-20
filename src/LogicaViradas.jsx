import { useState } from "react";
import cards from "./Cards"
import play from "./assets/seta_play.png"
import virar from "./assets/seta_virar.png"
import styled from "styled-components";
import erro from "./assets/icone_erro.png"
import quase from "./assets/icone_quase.png"
import certo from "./assets/icone_certo.png"






export default function LogicaViradas(props) {
   // const [clickCard, setClickCard] = useState();
    const[perguntaCard, setPerguntaCard] = useState("");
    const [cardsRender, setCardsRender] = useState([...cards]);
    const [estado, setEstado] = useState("inicial")
    const [showAnsware, setShowAnsware] = useState(false)
    const [colorFlash, setColorFlash] = useState("black")
    const [textLineFlash, setTextLineFlash] = useState("none")
    const [contador, setContador] = useState(0)
    const [statusIcone,setStatusIcone ] = useState(erro)
    const [icone, setIcone] = useState(false)
   
   
    

    function inicial(){
      setEstado("pergunta");
    }

    function resposta(){
      setShowAnsware(true)
      setContador(1)
    }

    function nLembrei(){
      setIcone(true)
      setEstado("inicial")
      setColorFlash("#FF3030")
      setTextLineFlash("line-through")
      setStatusIcone(erro)
     
    }


    function QLembrei(){
      setIcone(true)
      setEstado("inicial")
      setColorFlash("#FF922E")
      setTextLineFlash("line-through")
      setStatusIcone(quase)

     
    }

    function zap(){
      setIcone(true)
      setEstado("inicial")
      setColorFlash("#2FBE34")
      setTextLineFlash("line-through")
      setStatusIcone(certo)

      
    }

    
  return(
      <>
      <SCdeck estado = {estado}
              showAnsware = {showAnsware}
              colorFlash = {colorFlash}
              textLineFlash = {textLineFlash}
              icone = {icone}
              
              >
        
          { estado === "inicial" &&(
              <li >
                      <p>{perguntaCard === cards[props.indiceFlash].question ? perguntaCard:` Pergunta ${props.indiceFlash +1}`} </p>
                      <img 
                      src={perguntaCard === cards[props.indiceFlash].question ? virar : play} alt="play"  
                      onClick={()=>inicial()}  
                      />

                      <img 
                      src={statusIcone} alt="status"  
                      />
                    </li>)}
          
           {estado === "pergunta" &&(
              <li >
                      <p>{showAnsware === false ? cards[props.indiceFlash].question : ""} </p>
                      <p>{showAnsware === true ? cards[props.indiceFlash].answer : ""}</p>
                      <span>
                        <div onClick={()=> nLembrei()}>Não lembrei</div>
                        <div onClick={()=>QLembrei()}>Quase não lembrei</div>
                        <div onClick={()=> zap()}>Zap!</div>
                      </span>
                      <img 
                      src= {virar} alt="virar"  
                      onClick={()=>resposta()}  
                      />
                    </li>)}

      </SCdeck>
      </>

  )
  
}

////styled///

const SCdeck = styled.ul`
 display: flex;
 flex-direction: column;
 margin-bottom: 10px;

  li{
    
    width: 300px;
    height:${props => props.estado === "pergunta" ? "131px" : "65px"};
    
    display: flex;
    
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 25px;

    background: ${props => (props.estado === "pergunta" ? "#FFFFD4" : "#fff")};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    position: relative;


    img{
      :nth-child(2n){
      position: absolute;
      right: 15px;
      bottom: 20px;
      width: 20px;
      height: 23px;
      :hover{
        cursor: pointer;
      }
      display: ${props => props.showAnsware === true ? "none":"inline"};

    }
    :nth-child(3n){
      display: ${props => props.icone === true ? "inline" : "none" };
      position: absolute;
      right: 15px;
      bottom: 20px;
    }
    }
   

    p{
      position: absolute;
      top:25px;
      left: 15px;
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;   
      
      text-decoration : ${props => props.textLineFlash};
      
      color:  ${props => props.colorFlash};
    }
    

    span{
      display: ${props => props.showAnsware === true ? "flex":"none"};
      
      align-items: center;
      
      position: absolute;
      bottom: 15px;
      left: 17px;
      
      

      div{
        width: 80px;
        height: 37px;
        border-radius: 5px;
        margin-right: 15px;
        
        color: #fff;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        

      
      :nth-child(1n){
        background-color: #FF3030;
      }
      :nth-child(2n){
        background-color: #FF922E;
      }
      :nth-child(3n){
        background: #2FBE34;
      }

    }
    }
  }
    `;