import React from 'react'

const captionCard = ({ content }) => {
  return (
    <div className="card shadow m-4" style={{ width: '18rem', height: '170px'}}>
      <div className="card-body text-center p-5">
        <p className="card-text text-danger" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{content}</p>
      </div>
    </div>
  )
}

export default captionCard
