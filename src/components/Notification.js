import React from 'react'
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';

const slideAnimation = keyframes`${slideInDown}`;

const NotificationContainer = styled.div`
  position: absolute;
  z-index: 101;
  top: 0;
  right: 0;
  background: #fde073;
  text-align: center;
  line-height: 2.5;
  width: 20%,
  overflow: hidden;
  padding: 4px;
  -webkit-box-shadow: 0 0 5px black;
  -moz-box-shadow: 0 0 5px black;
  box-shadow: 0 0 5px black;
  animation: 1s ${slideAnimation}
`;

const HeaderContainer = styled.h3`
  font-weight: bold;
`;

const MessageContainer = styled.p`
  font-size: 10px
`;
const Notification = ({ notifications }) => {
  // return console.log(notifications)
    return (
      notifications !== null && notifications.length > 0 &&
        notifications.map((notification) => (
          <NotificationContainer>
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
  return { notifications: state.notifications }
}

export default connect(mapStateToProps, {})(Notification)
