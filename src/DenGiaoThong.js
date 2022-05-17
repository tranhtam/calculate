import React, { useEffect, useState } from 'react'
import './Dgt.css';

const DenGiaoThong = () => {
  const [color, setColor] = useState('green');
  const [mess, setMess] = useState('GO!')
  const [timeG, setTimeG] = useState('15')
  const [timeY, setTimeY] = useState('3')
  const [timeR, setTimeR] = useState('10')
  const [time, setTime] = useState('15')
  const [animation, setAnimation] = useState('go 3s linear infinite')


  useEffect(() => {
    const timeOutG = setTimeout(() => {
      if (color === 'green') {
        setColor('yellow')
        setMess('WAIT!')
        setAnimation('wait 8.5s linear infinite')
        setTimeY('3')
        setTime('3')
      }
    }, 16000)

    // setTimeout(() => {
    //   if (color === 'yellow') {
    //     setColor('red')
    //     setMess('STOP!')
    //     setTime('10')
    //   }
    // }, 4000)


    // setTimeout(() => {
    //   if (color === 'red') {
    //     setColor('green')
    //     setMess('GO!')
    //     setTime('15')
    //   }
    // }, 11000)

    return () => clearTimeout(timeOutG)
  }, [color])

  useEffect(() => {
    const timeOutY = setTimeout(() => {
      if (color === 'yellow') {
        setColor('red')
        setMess('STOP!')
        setAnimation('stop 0s linear infinite')
        setTimeR('10')
        setTime('10')
      }
    }, 4000)
    return () => clearTimeout(timeOutY)
  }, [color])

  useEffect(() => {
    const timeOutR = setTimeout(() => {
      if (color === 'red') {
        setColor('green')
        setMess('GO!')
        setAnimation('go 3s linear infinite')
        setTimeG('15')
        setTime('15')
      }
    }, 11000)
    return () => clearTimeout(timeOutR)
  }, [color])

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (color === 'red') {
        setTimeR((timeR) - 1)
        setTime((timeR) - 1)
      } else if (color === 'green') {
        setTimeG((timeG) - 1)
        setTime((timeG) - 1)
      } else if (color === 'yellow') {
        setTimeY((timeY) - 1)
        setTime((timeY) - 1)
      } else {
        return
      }
    }, 1000)
    return () => clearTimeout(timeOut)
  })

  return (
    <div className='traffic' >
      <div className='traffic-lights'>

        <button
          style={{ backgroundColor: color === 'green' ? 'green' : '' }}>{timeG}</button>
        <button
          style={{ backgroundColor: color === 'yellow' ? 'yellow' : '' }}>{timeY}</button>
        <button
          style={{ backgroundColor: color === 'red' ? 'red' : '' }}>{timeR}</button>

      </div>

      <div className='mess'>
        <p>{mess}</p>
      </div>

      <div className='time'>
        <p>{time}</p>
      </div>

      <div id="loop" class="center"></div>
      <div id="bike-wrapper" class="center">
        <div id="bike" class="centerBike"
          style={{ animation: animation }}
        ></div>
      </div>

    </div>
  )
}

export default DenGiaoThong