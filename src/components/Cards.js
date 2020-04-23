import React from 'react'
import { zoomInUp } from 'react-animations'
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { addCaptionTag } from './../redux/actions/caption';
import { connect } from 'react-redux';
// import {} from ''

const bounceAnimation = keyframes`${zoomInUp}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

const captionCard = ({ content, id, captionBtn='false', addCaptionTag }) => {
  const handleClick = (id) => {
    return addCaptionTag(id);
  }

  return (
    <BouncyDiv>
      <div className="card shadow m-4" style={{ width: '18rem', height: '170px'}}>
          <div className="card-body text-center p-5">
            <p className="card-text text-danger" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{content}</p>
            {
              captionBtn &&
              <Link to='/tag/caption'>
                <button
                  className="btn btn-danger mt-1"
                  onClick={() => handleClick(id)}
                  >
                    Captions
                  </button>
              </Link>
            }
          </div>
        </div>
    </BouncyDiv>

  )
}

export default connect(null, { addCaptionTag })(captionCard)
