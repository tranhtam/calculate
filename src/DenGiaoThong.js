import React, { useEffect, useState } from 'react'

const DenGiaoThong = () => {
  const [color, setColor] = useState('red');
  const [mess, setMess] = useState('dung lai')

  useEffect(() => {
    if (color === 'red') {
      setMess('dung lai')
    } else if (color === 'yellow') {
      setMess('di cham')
    } else {
      setMess('duoc di')
    }

  }, [color])

  return (
    <div>DenGiaoThong
      <button onClick={() => setColor('red')}
        style={{ color: 'black', backgroundColor: color === 'red' ? 'red' : '' }}>DO</button>
      <button onClick={() => setColor('yellow')}
        style={{ color: 'black', backgroundColor: color === 'yellow' ? 'yellow' : '' }}>VANG</button>
      <button onClick={() => setColor('green')}
        style={{ color: 'black', backgroundColor: color === 'green' ? 'green' : '' }}>XANH</button>
      <p>{mess}</p>
    </div>
  )
}

export default DenGiaoThong