import React, { useState } from 'react'
import './calculator.css'

function Calculator () {

    const [consumption, setConsumption] = useState(0)
    const [city, setCity] = useState(5)
    const [minCost, setMinCost] = useState(30)
    const [result, setResult] = useState("")

    function getValue(event) {
        setConsumption(event.target.value)
    }

    function getCity(event) {
        setCity(event.target.value)
    }

    function getMinCost(event) {
        setMinCost(event.target.value)
    }
 
    function calFotoVoltaic() {
        const fotoVoltaic = Math.ceil((((consumption-minCost)/30)/(city*0.8))/0.26)

        setResult(fotoVoltaic+" placas")
        console.log(result)
    }

    return (
            <>
                <container>
                    <h1>Quer saber quantos paineis são necessárias para abastecer sua casa?</h1> 

                    <div className="select">
                        <label>Cidade:</label>
                        <select name="city" onChange={getCity}>
                            <option value="default">--selecione--</option>
                            <option value="4.91">Campinas-SP</option>
                            <option value="5.60">Teresina-PI</option>
                            <option value="4.71">Belem-PA</option>
                            <option value="3.87">Cubatão-SP</option>
                            <option value="4.19">Curitiba-PR</option>
                        </select>
                    </div>
                    <div className="classification">
                        <label>Classificação:</label>
                        <select name="classification" onChange={getMinCost}>
                            <option value="30">Monofásico</option>
                            <option value="50">Bifásico</option>
                            <option value="100">Trifásico</option>
                        </select>
                    </div>
                    <div className="consumption">
                        <label>Consumo médio anual:</label>
                        {/* <input type="number" className="input" placeholder="Ex: 250"
                        onChangeText={(valueConsu) => valueConsu.length ? setConsumption(parseInt(valueConsu)): setConsumption(0)}
                        value={consumption.toString(10)}> */}
                        <input type="number" name="consumption" className="input" placeholder="em KWh" onChange={getValue}>
                        </input>
                    </div>
                    <div>
                        <button className="calc-button" onClick={calFotoVoltaic}>Calcular</button>
                    </div>
                    <div className="result-box">
                        <label name="result"></label>
                        <span>{result}</span>
                    </div>
                </container> 
            </>
    )
}

export default Calculator