import React from 'react'
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const slideAnimation = keyframes`${slideInRight}`;

const NotificationContainer = styled.div`
  position: absolute;
  z-index: 101;
  right: 0;
  botton: 0;
  text-align: center;
  line-height: 3.5;
  width: 120%,
  color: #fff,
  overflow: hidden;
  padding: 7px 50px;
  -webkit-box-shadow: 0 0 5px grey;
  -moz-box-shadow: 0 0 5px grey;
  box-shadow: 0 0 5px grey;
  animation: 1s ${slideAnimation}
`;

const HeaderContainer = styled.h3`
  font-size: 40px;
`;

const MessageContainer = styled.p`
  font-size: 15px;
`;
const Notification = ({ notifications }) => {
    return (
      notifications !== null && notifications.length > 0 &&
        notifications.map((notification) => (
          <NotificationContainer key={notification.id} style={
            { backgroundColor: notifications.status = 'success' ? '#DA3343' : '#F3A72B', color: '#fff' }
          }>
          <HeaderContainer>
            {notification.status}
          </HeaderContainer>
          <MessageContainer>
            {notification.msg}
          </MessageContainer>
        </NotificationContainer>
    ))
    )
}

const mapStateToProps = (state) => {
  return { notifications: state.Notifications.notifications }
}

export default connect(mapStateToProps, {})(Notification)
