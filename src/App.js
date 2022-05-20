import { useState } from 'react'
import './App.css';

function App() {

  const [result, setResult] = useState('_')
  const [fakeResult, setFakeResult] = useState('_')
  const [isCalculate, setIsCalculate] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [isLunisolar, setIsLunisolar] = useState(true)
  const [isDot, setIsDot] = useState(true)
  const [isPercent, setIsPercent] = useState(false)

  const handleClick = (e) => {
    // if (e.target.name !== '0' && isFirstRender) {
    //   setResult(result.replace('0', e.target.name))
    //   setFakeResult(result.replace('0', e.target.name))
    //   setIsCalculate(true)
    //   setIsFirstRender(false)
    //   setIsPercent(true)
    // } else {
    //   setResult(result.concat(e.target.name))
    //   setFakeResult(fakeResult.concat(e.target.name))
    //   setIsCalculate(true)
    //   setIsFirstRender(false)
    //   setIsPercent(true)
    //   // setFakeResult(result.replace(result, e.target.name))
    // }

    if (e.target.name !== '_' && isFirstRender) {
      setResult(result.replace('_', e.target.name))
      setFakeResult(result.replace('_', e.target.name))
      setIsCalculate(true)
      setIsFirstRender(false)
      setIsPercent(true)
    } else if (result.substr(-1) === '-'
      || result.substr(-1) === '+'
      || result.substr(-1) === '/'
      || result.substr(-1) === '*') {
      setFakeResult(result.replace(result, e.target.name))
      setResult(result.concat(e.target.name).replace(',', '.'))
      setIsCalculate(true)
      setIsFirstRender(false)
      setIsPercent(true)
      setIsDot(true)
    } else {
      setResult(result.concat(e.target.name))
      setFakeResult(fakeResult.concat(e.target.name))
      setIsCalculate(true)
      setIsFirstRender(false)
      setIsPercent(true)
    }
  }

  const handleCalculate = (e) => {
    if (isCalculate) {
      setResult(result.concat(e.target.name))
      setIsCalculate(false)
      setIsDot(false)
      setIsPercent(false)
    }
    else if (result.substr(-1) === '-') {
      setResult(result.replace('-', e.target.name))
      setIsCalculate(false)
      setIsDot(true)
      setIsPercent(false)
    } else if (result.substr(-1) === '+') {
      setResult(result.replace('+', e.target.name))
      setIsCalculate(false)
      setIsDot(true)
      setIsPercent(false)
    } else if (result.substr(-1) === '*') {
      setResult(result.replace('*', e.target.name))
      setIsCalculate(false)
      setIsDot(true)
      setIsPercent(false)
    } else {
      setResult(result.replace('/', e.target.name))
      setIsCalculate(false)
      setIsDot(true)
      setIsPercent(false)
    }
  }

  const handleClear = () => {
    setResult('_')
    setFakeResult('_')
    setIsCalculate(false)
    setIsFirstRender(true)
    setIsLunisolar(true)
    setIsDot(true)
    setIsPercent(false)
  }

  const handleEqualPercent = () => {
    if (isPercent) {
      setResult(eval(result / '100').toLocaleString().replace('.', ','))
      setFakeResult(eval(result / '100').toLocaleString().replace('.', ','))
      setIsDot(false)
    }
  }

  const handleEqual = (e) => {
    parseFloat(setResult(eval(result).toString().replace('.', ',')))
    parseFloat(setFakeResult(eval(result).toString().replace('.', ',')))
    setIsPercent(false)
    setIsDot(false)
  }

  const handleLunisolar = (e) => {
    if (isLunisolar) {
      setResult('-' + result.concat(e.target.name))
      setFakeResult('-' + result.concat(e.target.name))
      setIsLunisolar(false)
    } else {
      setResult(result.replace('-', e.target.name))
      setFakeResult(result.replace('-', e.target.name))
      setIsLunisolar(true)
    }
  }

  const handleDot = (e) => {
    // if (isDot && result.substr(-1) !== '.') {
    //   setResult(result.concat(e.target.name) + '.')
    //   setFakeResult(fakeResult.concat(e.target.name) + '.')
    //   setIsDot(false)
    // } else {
    //   setResult(result.replace('.', ','))
    //   setFakeResult(fakeResult.replace('.', ','))
    //   setIsDot(false)
    // }
    if (isDot) {
      parseFloat(setResult(result.concat(e.target.name.toString()) + '.'))
      parseFloat(setFakeResult(fakeResult.concat(e.target.name.toString()) + ','))
      setIsDot(false)
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
        {console.log("result: ", result)}
        {console.log("fakeResult: ", fakeResult)}
        <input type='text' value={fakeResult} />
      </form>

      <div className='keypad'>
        <button onClick={handleClear} className='gray'>AC</button>
        <button onClick={handleLunisolar} className='gray'>+/-</button>
        <button onClick={handleEqualPercent} className='gray'>%</button>
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
        <button onClick={handleDot} className='light-gray'>,</button>
        <button onClick={handleEqual} id='equal' className='orange'>=</button>
      </div>
    </div>
  );
}

export default App;
