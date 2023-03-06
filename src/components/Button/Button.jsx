import React from 'react'

const Button = ({method, methodArgument, name, btnClass}) => {
  return (
    <button onClick={() => {
        method(methodArgument)}} className={btnClass}>
        {name}
      </button>
  )
}

export default Button