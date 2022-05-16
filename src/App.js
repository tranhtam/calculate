import { useState } from 'react'
import './App.css';

function App() {

  const [result, setResult] = useState('_')
  const [iscalculate, setIsCalculate] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true)

  const handleClick = (e) => {
    if (e.target.name !== '_' && isFirstRender) {
      setResult(result.replace('_', e.target.name))
      setIsCalculate(true)
      setIsFirstRender(false)
    } else {
      setResult(result.concat(e.target.name))
      setIsCalculate(true)
      setIsFirstRender(false)
    }
  }

  const handleCalculate = (e) => {
    if (iscalculate) {
      setResult(result.concat(e.target.name))
      setIsCalculate(false)
    }
  }

  const handleClear = () => {
    setResult('_')
    setIsCalculate(false)
    setIsFirstRender(true)
  }

  const handleEqual = (e) => {
    setResult(eval(result))
  }

  const handleAm = (e) => {
    // setResult('-' + result.concat(e.target.name))

    if (result.substr(-1) === '+'
      || result.substr(-1) === '*'
      || result.substr(-1) === '/') {
      setResult(result.concat(e.target.name) + '-')
    } else {
      setResult('-' + result.concat(e.target.name))

    }
  }


  return (
    <div className='App'>
      <div className='dots'>
        <p>.</p>
        <p>.</p>
        <p>.</p>
      </div>

      <form>
        <input type='text' value={result} />
      </form>

      <div className='keypad'>
        <button onClick={handleClear} className='gray'>AC</button>
        <button onClick={handleAm} className='gray'>+/-</button>
        <button name='%' onClick={handleCalculate} className='gray'>%</button>
        <button name='/' onClick={handleCalculate} className='orange'>&#247;</button>
        <button name="7" onClick={handleClick} className='light-gray'>7</button>
        <button name='8' onClick={handleClick} className='light-gray'>8</button>
        <button name='9' onClick={handleClick} className='light-gray'>9</button>
        <button name='*' onClick={handleCalculate} className='orange'>&#215;</button>
        <button name='4' onClick={handleClick} className='light-gray'>4</button>
        <button name='5' onClick={handleClick} className='light-gray'>5</button>
        <button name='6' onClick={handleClick} className='light-gray'>6</button>
        <button name='-' onClick={handleCalculate} className='orange'>&#8722;</button>
        <button name='1' onClick={handleClick} className='light-gray'>1</button>
        <button name='2' onClick={handleClick} className='light-gray'>2</button>
        <button name='3' onClick={handleClick} className='light-gray'>3</button>
        <button name='+' onClick={handleCalculate} className='orange'>&#43;</button>
        <button name='0' onClick={handleClick} id='zero' className='light-gray'>0</button>
        <button name='.' onClick={handleCalculate} className='light-gray'>,</button>
        <button onClick={handleEqual} id='equal' className='orange'>=</button>
      </div>
    </div>
  );
}

export default App;
