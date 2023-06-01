import React from 'react'

export const Button = ({textButton, onClick}) => {
  return (
    <button onClick={onClick}>{textButton}</button>
  )
}
