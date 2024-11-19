import {data} from "./data/data";

import { useState } from "react";

import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

import "./App.css";

function App() {

  // função para calcumar o imc
  const calcImc = (e, height, weight) => {
    e.preventDefault();
  
    // validação
    if (!weight || !height) return;
    
    // função para converter a virgula para ponto
    const weightFloat = +weight.replace(",", ".")
    const heightFloat = +height.replace(",", ".")
    
    // console.log(heightFloat, weightFloat);

    // calculo do imc. com resultado formatado para 1 casa decimal
    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    // console.log(imcResult);
    setImc(imcResult);

    // iterar sobre os elementos sem a necessidade de um loop tradicional
    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    // valores fora do comum
    if (!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault;

    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return <div className='container'> {!imc ? 
    <ImcCalc calcImc={calcImc}/> : 
    <ImcTable 
      data={data} 
      imc={imc} 
      info={info} 
      infoClass={infoClass}
      resetCalc={resetCalc}/>}
  </div>;
}

export default App;