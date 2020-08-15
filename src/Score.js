import React from 'react'

function Score(props) {
  return (
    <div>
      <p> 
        Your current score is 
        <strong> { props.correctAnswers } / { props.totalAnswers } </strong>
      </p>
    </div>
  )
}

export default Score