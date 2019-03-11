import React from 'react'

const charComponent = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }

  return (
    <div>
      <span style={style} onClick={props.deleteChar}>{props.char}</span>
    </div>
  )
}

export default charComponent