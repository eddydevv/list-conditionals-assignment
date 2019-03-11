import React from 'react'

const charComponent = (props) => {
  const style = {
    display: 'inline-block',
    padding: '1%',
    textAlign: 'center',
    margin: '1%',
    border: '1px solid black',
    color: 'white',
    background: 'rgba(0,0,0,0.3)'
  }

  return <span style={style} onClick={props.deleteChar}>{props.char}</span>
}

export default charComponent