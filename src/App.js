import "./App.css"
import {useState} from 'react'

function App() { 

  const [valOne,updateValueOne] = useState("0")
  const [valTwo,updateValueTwo] = useState("0")
  const [operator,updateOperator] = useState('+')
  const getInt = (val,number) => val === "0" ? number : val+number
  const calculate = (operator) => {
    const one = Number(valOne)
    const two = Number(valTwo)
    switch(operator){
      case '+':
        return one + two
      case '-':
        return one - two
      case '*':
        return one * two
      case '÷':
        return one / two
    }
  }
  const answer = calculate(operator)
  return (
    <div className="calculator">
        <div className="panel">
          <p>{valOne}</p>
          <div className="numbers">
            <button onClick = {() => updateValueOne(() => getInt(valOne,"1"))}>1</button>
            <button onClick = {() => updateValueOne(() => getInt(valOne,"2"))}>2</button>
            <button onClick = {() => updateValueOne(() => getInt(valOne,"3"))}>3</button>
            <button onClick = {() => updateValueOne(() => getInt(valOne,"4"))}>4</button>
            <button onClick = {() => updateValueOne(() => getInt(valOne,"5"))}>5</button>
            <button onClick = {() => updateValueOne(() => getInt(valOne,"6"))}>6</button>
            <button onClick = {() => updateValueOne(() => getInt(valOne,"7"))}>7</button>
            <button onClick = {() => updateValueOne(() => getInt(valOne,"8"))}>8</button>
            <button onClick = {() => updateValueOne(() => getInt(valOne,"9"))}>9</button>
            <button onClick = {() => updateValueOne(() => getInt(valOne,"0"))}>0</button>
            <button onClick = {() => updateValueOne("0")}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick = {() => updateOperator('+')}>+</button>
            <button onClick = {() => updateOperator('-')}>-</button>
            <button onClick = {() => updateOperator('*')}>*</button>
            <button onClick = {() => updateOperator('÷')}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{valTwo}</p>
          <div className="numbers">
          <button onClick = {() => updateValueTwo(() => getInt(valTwo,"1"))}>1</button>
            <button onClick = {() => updateValueTwo(() => getInt(valTwo,"2"))}>2</button>
            <button onClick = {() => updateValueTwo(() => getInt(valTwo,"3"))}>3</button>
            <button onClick = {() => updateValueTwo(() => getInt(valTwo,"4"))}>4</button>
            <button onClick = {() => updateValueTwo(() => getInt(valTwo,"5"))}>5</button>
            <button onClick = {() => updateValueTwo(() => getInt(valTwo,"6"))}>6</button>
            <button onClick = {() => updateValueTwo(() => getInt(valTwo,"7"))}>7</button>
            <button onClick = {() => updateValueTwo(() => getInt(valTwo,"8"))}>8</button>
            <button onClick = {() => updateValueTwo(() => getInt(valTwo,"9"))}>9</button>
            <button onClick = {() => updateValueTwo(() => getInt(valTwo,"0"))}>0</button>
            <button onClick = {() => updateValueTwo("0")}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{answer}</p>
        </div>
    </div>
  )
}

export default App
