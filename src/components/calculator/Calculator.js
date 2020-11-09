import React, { useState } from 'react'

function Calculator () {

    const [consumption, setConsumption] = useState(0)
    const [city, setCity] = useState("Toxy City")
    const [result, setResult] = useState(0)

    function getValue(event) {
        setConsumption(event.value)
        
        setConsumption(consumption + 1)
    }
 
    return (
            <> 
                <h1>Hellor world from calculator</h1> 
                
                <div className="select">
                    <label>Cidade:</label>
                    <select name="city">
                        <option value="default">--selecione--</option>
                        <option value="campinas">Campinas-SP</option>
                        <option value="teresina">Teresina-PI</option>
                        <option value="belem">Belem-PA</option>
                        <option value="cubatão">Cubatão-SP</option>
                        <option value="curitiba">Curitiba-PR</option>
                    </select>
                </div>
                <div className="classification">
                    <label>Classificação:</label>
                    <select name="classification">
                        <option value="30">Monofásico</option>
                        <option value="50">Bifásico</option>
                        <option value="100">Trifásico</option>
                    </select>
                </div>
                <div className="consumption">
                    <label>Consumo médio anual:</label><br></br>
                    {/* <input type="number" className="input" placeholder="Ex: 250"
                    onChangeText={(valueConsu) => valueConsu.length ? setConsumption(parseInt(valueConsu)): setConsumption(0)}
                    value={consumption.toString(10)}> */}
                    <input type="number" name="consumption" className="input" placeholder="em KWh" onChange={getValue}>
                    </input>
                </div>
                <div className="result">
                    <label name="result"></label>
                    <span>result came here: {consumption} -- {city} -- {result}</span>
                </div>
            </>
    )
}

export default Calculator