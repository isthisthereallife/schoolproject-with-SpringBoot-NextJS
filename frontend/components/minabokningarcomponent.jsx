import React from 'react'
import fetch from 'node-fetch'

export default function MinabokningarComponent() {
  const response = await fetch('http://localhost:80
  let testVar = "and this is a var"
  let testNum = 0
  return (
    <>
      <div>
        THIS IS A COMPONENT! ${testVar}
        this many times rendered: ${testNum}
      </div>
    </>
  )
}
