import React, { useState, useRef, useEffect, useCallback } from 'react'
import './index.scss'

// 1. 轮播图
// 2. js控制滚动条

const height = 40

const WrodScroll = () => {
  const [top, setTop] = useState(0)
  const ulRef = useRef(null)

  const animate = useCallback(() => {
    const ele = document.querySelector('.container')
    if (ele) {
      if (top >= height * 5) {
        setTop(0)
        ele.scrollTop = 0
        return
      }
      setTop(top + height)
      ele.scrollTo({ top: height + top, behavior: 'smooth' })
    }
  }, [top, setTop])

  useEffect(() => {
    const timerId = setInterval(() => {
      animate()
    }, 2000)
    return () => clearInterval(timerId)
  }, [animate])

  return (
    <div className="word-scroll">
      <ul className="container" ref={ulRef}>
        <li>1. 11111</li>
        <li>2. 22222</li>
        <li>3. 33333</li>
        <li>4. 44444</li>
        <li>1. 11111</li>
      </ul>
    </div>
  )
}

export default WrodScroll
