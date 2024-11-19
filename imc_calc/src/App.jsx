import {data} from "./data/data";

import { useState } from "react";

import ImcCalc from "./components/imcCalc";
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

    // calculo do imc
    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    // console.log(imcResult);
    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  };

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return <div className='container'> {!imc ? <ImcCalc calcImc={calcImc}/> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass}/>}</div>;
}

export default App;