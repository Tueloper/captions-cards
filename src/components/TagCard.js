import React from 'react'
import { slideInUp } from 'react-animations'
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${slideInUp}`;

const TagContainer = styled.div`
  animation: 1s ${bounceAnimation};
`;

const TagCard = ({ content }) => {
  return (
  <TagContainer>
     <div className="card shadow m-4" style={{ width: '68rem', height: '50px'}}>
          <div className="card-body text-center p-1">
            <p className="card-text text-danger" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{content}</p>
          </div>
        </div>
  </TagContainer>
  )
}

export default TagCard;
