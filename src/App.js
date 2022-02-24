import "./App.css"
import {useState} from 'react'

function App() { 

  const [valOne,updateValueOne] = useState("0")
  const [valTwo,updateValueTwo] = useState("0")
  const [operator,updateOperator] = useState('+')
  let recallOne 
  let recallTwo
  const store = number => {
    recallOne = String(number)
    recallTwo = String(number)
  }
  const getFloat = (val,number) => {
    if (number === '.') return val.includes('.') ? val : val+'.'
    else return val === "0" ? number : val+number
  }
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
            <button onClick = {() => updateValueOne(() => getFloat(valOne,"1"))}>1</button>
            <button onClick = {() => updateValueOne(() => getFloat(valOne,"2"))}>2</button>
            <button onClick = {() => updateValueOne(() => getFloat(valOne,"3"))}>3</button>
            <button onClick = {() => updateValueOne(() => getFloat(valOne,"4"))}>4</button>
            <button onClick = {() => updateValueOne(() => getFloat(valOne,"5"))}>5</button>
            <button onClick = {() => updateValueOne(() => getFloat(valOne,"6"))}>6</button>
            <button onClick = {() => updateValueOne(() => getFloat(valOne,"7"))}>7</button>
            <button onClick = {() => updateValueOne(() => getFloat(valOne,"8"))}>8</button>
            <button onClick = {() => updateValueOne(() => getFloat(valOne,"9"))}>9</button>
            <button onClick = {() => updateValueOne(() => getFloat(valOne,"0"))}>0</button>
            <button onClick = {() => updateValueOne(() => getFloat(valOne,"."))}>.</button>
            <button onClick = {() => updateValueOne("0")}>Clear</button>
          </div>
          <button onClick = {() => updateValueOne(recallOne)}>Recall</button>
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
          <button onClick = {() => updateValueTwo(() => getFloat(valTwo,"1"))}>1</button>
            <button onClick = {() => updateValueTwo(() => getFloat(valTwo,"2"))}>2</button>
            <button onClick = {() => updateValueTwo(() => getFloat(valTwo,"3"))}>3</button>
            <button onClick = {() => updateValueTwo(() => getFloat(valTwo,"4"))}>4</button>
            <button onClick = {() => updateValueTwo(() => getFloat(valTwo,"5"))}>5</button>
            <button onClick = {() => updateValueTwo(() => getFloat(valTwo,"6"))}>6</button>
            <button onClick = {() => updateValueTwo(() => getFloat(valTwo,"7"))}>7</button>
            <button onClick = {() => updateValueTwo(() => getFloat(valTwo,"8"))}>8</button>
            <button onClick = {() => updateValueTwo(() => getFloat(valTwo,"9"))}>9</button>
            <button onClick = {() => updateValueTwo(() => getFloat(valTwo,"0"))}>0</button>
            <button onClick = {() => updateValueTwo(() => getFloat(valTwo,"."))}>.</button>
            <button onClick = {() => updateValueTwo("0")}>Clear</button>
          </div>
          <button onClick = {() => updateValueTwo(recallTwo)}>Recall</button>
        </div>
        <div className="panel answer">
          <p>{answer}</p>
          <button onClick = {() => store(answer)}>Store</button>
        </div>
    </div>
  )
}

export default App
