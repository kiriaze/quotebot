import React from 'react'
import styled, { css } from 'styled-components'
import mq from '../../../utils/mq'

const sharedStyles = css`
  display: block;
  font-weight: 600;
`;

const handleLevel = props => {
  switch(props.level) {
    case '1':
      return css`
        font-size: 2.6rem;
        ${mq('small')} {
          font-size: 4rem;
        }
      `
    case '2':
      return css`
        font-size: 2.4rem;
        ${mq('small')} {
          font-size: 4rem;
        }
      `
    case '3':
      return css`
        font-size: 2.2rem;
        ${mq('small')} {
          font-size: 4rem;
        }
      `
    case '4':
      return css`
        font-size: 2rem;
        ${mq('small')} {
          font-size: 4rem;
        }
      `
    case '5':
      return css`
        font-size: 1.8rem;
        ${mq('small')} {
          font-size: 4rem;
        }
      `
     case '6':
      return css`
        font-size: 1.6rem;
        ${mq('small')} {
          font-size: 4rem;
        }
      `
    default:
      return ''
  }
}

const StyledHeading = styled.h1`
  ${sharedStyles}
  ${props => handleLevel(props)}
`

const Heading = ({ level, ...rest }) => {
  return <StyledHeading level={level} as={`h${level}`} {...rest} />
}

Heading.defaultProps = {
  level: '1'
}

export default Heading