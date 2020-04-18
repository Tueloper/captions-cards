import React from 'react'
import './../App.css'

const Spinner =() => {
  return (
    <div className="text-center" style={spinnerStyle}>
        <div className="loading"></div>
    </div>
  )
}

const spinnerStyle = {
  width: '100%',
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default Spinner
