import React from 'react'
import styled, { css } from 'styled-components'

const StyledXP = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: white;
  display: flex;
  width: 5rem;
  height: 5rem;
  font-size: 1rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: var(--theme-colors-success);
  transition: background .35s ease;
  ${props => props.level >= 10 && css`
    background: red;
    // css animation; confetti/pop/bubbly
  `}
  ${props => props.level >= 20 && css`
    background: orange;
    // css animation; confetti/pop/bubbly
  `}
  ${props => props.level >= 30 && css`
    background: purple;
    // css animation; confetti/pop/bubbly
  `}
`

const XP = ({ level, ...rest }) => (<StyledXP level={level} {...rest} />)

export default XP