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
    } else if (result.substr(0) === '0') {
      setResult(result.replace('0', e.target.name))
      setFakeResult(fakeResult.replace('0', e.target.name))
      setIsCalculate(true)
      setIsFirstRender(false)
      setIsPercent(true)
    } else if (result.substr(-2, 2) === '+0') {
      setResult(result.replace('+0', '+').concat(e.target.name).toString())
      setFakeResult(fakeResult.replace('0', e.target.name))
      setIsCalculate(true)
      setIsFirstRender(false)
      setIsPercent(true)
    } else if (result.substr(-2, 2) === '-0') {
      setResult(result.replace('-0', '-').concat(e.target.name).toString())
      setFakeResult(fakeResult.replace('0', e.target.name))
      setIsCalculate(true)
      setIsFirstRender(false)
      setIsPercent(true)
    } else if (result.substr(-2, 2) === '*0') {
      setResult(result.replace('*0', '*').concat(e.target.name).toString())
      setFakeResult(fakeResult.replace('0', e.target.name))
      setIsCalculate(true)
      setIsFirstRender(false)
      setIsPercent(true)
    } else if (result.substr(-2, 2) === '/0') {
      setResult(result.replace('/0', '/').concat(e.target.name).toString())
      setFakeResult(fakeResult.replace('0', e.target.name))
      setIsCalculate(true)
      setIsFirstRender(false)
      setIsPercent(true)
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
      setIsDot(true)
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
      setResult(eval(result / '100').toString().replace('.', ',').replace(',', '.'))
      setFakeResult(eval(result / '100').toString().replace('.', ','))
      // setResult(eval(result / '100').toString())
      // setFakeResult(eval(result / '100').toString())
      setIsDot(false)
    }
  }

  const handleEqual = (e) => {
    parseFloat(setResult(eval(result).toString().replace('.', ',').replace(',', '.')))
    parseFloat(setFakeResult(eval(result).toString().replace('.', ',')))
    // parseFloat(setResult(eval(result).toLocaleString('vi-VN').replace('.', ',')))
    // parseFloat(setFakeResult(eval(result).toLocaleString('vi-VN').replace('.', ',')))
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
    if (isDot) {
      setResult(result.concat(e.target.name.toString()).replace(',', '.').replace('_', '0'))
      setFakeResult(fakeResult.concat(e.target.name.toString()).replace('_', '0'))
      if (result.substr(-1) === '+' || result.substr(-1) === '-' || result.substr(-1) === '*' || result.substr(-1) === '/') {
        setFakeResult(result.concat(e.target.name.toString()).replace(result, '0'))
      }
      setIsDot(false)
      setIsFirstRender(false)
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
        <button name=',' onClick={handleDot} className='light-gray'>,</button>
        <button onClick={handleEqual} id='equal' className='orange'>=</button>
      </div>
    </div>
  );
}

export default App;
