import { useState } from "react"

import Button from "./Button"
import "./ImcCalc.css"

const ImcCalc = ({calcImc}) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    // função para limpar o formulário
    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    };

    // validação dos inputs
    const validDigits = (text) => {
        // filtro no 'text'. substituindo o digito errado por 'vazio'
        return text.replace(/[^0-9,]/g, "")
    }

    // função para alterar a Altura
    const handleHeightChange = (e) => {
        // validação
        const updatedValue = validDigits(e.target.value)

        setHeight(updatedValue);
    };
   
    const handleWeightChange = (e) => {
        // validação
        const updatedValue = validDigits(e.target.value)

        setWeight(updatedValue);
    };

  return (
    <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form id="imc-form">
        <div className="form-inputs">
            <div className="form-control">
                <label htmlFor="height">Altura:</label>
                <input type="text" name="height" id="height" placeholder="Exemplo 1,75"
                onChange={(e) => handleHeightChange(e)}
                value={height}/>
            </div>
            <div className="form-control">
                <label htmlFor="weight">Peso:</label>
                <input type="text" name="weight" id="weight" placeholder="Exemplo 70,5"
                onChange={(e) => handleWeightChange(e)}
                value={weight}/>
            </div>
        </div>
        <div className="action-control">
            <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}
            />
            <Button id="clear-btn" text="Limpar" action={clearForm}/>
        </div>
    </form> 
    </div>
  )
}

export default ImcCalc
