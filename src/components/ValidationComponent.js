import React from 'react'

const validationComponent = (props) => {
  let lengthComment = props.inputLength <= 5 ? "Text too short" : "Text long enough"

  return (
    <div>
      <p>{lengthComment}</p>
    </div>
  )
}

export default validationComponent