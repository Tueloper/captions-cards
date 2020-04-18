import React from 'react'
import { zoomInUp } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const bounceAnimation = keyframes`${zoomInUp}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

const captionCard = ({ content }) => {
  return (
    <BouncyDiv>
      <div className="card shadow m-4" style={{ width: '18rem', height: '170px'}}>
          <div className="card-body text-center p-5">
            <p className="card-text text-danger" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{content}</p>
          </div>
        </div>
    </BouncyDiv>

  )
}

export default captionCard
