
import React, { useEffect } from 'react'
import {
  createAnimation
} from '../../../utils/animation'

const Accordion =  () => {

  const [count, setCount] = React.useState(0)

  useEffect(() => {
    createAnimation({
      from: 0,
      to: 1000,
      onmove: n => {
        setCount(n)
      }
    })
  }, [])


  return <div>{count}</div>
}

export default Accordion