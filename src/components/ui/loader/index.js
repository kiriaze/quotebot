import React from 'react'
import styled from 'styled-components'

const StyledLocationLoader = styled.div`
  width: 30px;
  height: 30px;
  // margin: auto;
  // position: relative;

  position: absolute;
  bottom: 7rem;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  &::before {
    width: 16px;
    height: 16px;
    top: calc(50% - 8px) ;
    left: calc(50% - 8px);
    border-bottom-right-radius: 0;
    box-shadow: 0 0 0 2px var(--theme-colors-primary);
    background: radial-gradient(transparent 0, transparent 3px, var(--theme-colors-primary) 3px);
    transform: rotate(45deg);
    animation-name: mapPin;
  }
  &::after {
    width: 4px;
    height: 2px;
    opacity: 0.8;
    top: 100%;
    left: calc(50% - 2px);
    background: var(--theme-colors-primary);
    animation-name: mapPinShadow;
  }
  
  @keyframes mapPin {
    50% {
      transform: rotate(45deg) translate(-50%, -50%);
    }
  }

  @keyframes mapPinShadow {
    50% {
      transform: scaleX(3);
      opacity: 0.2;
    }
  }
`;

export const LocationLoader = () => <StyledLocationLoader />

const StyledLoader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

export const Loader = () => <StyledLoader><span>loading placeholder...</span></StyledLoader>