import styled, { css } from 'styled-components'

// // proto/scss
// import React from 'react'
// import './style.scss'

// export const Button = ({ variant, ...rest }) => {
//   return <button className={`btn btn-${variant}`} {...rest} />;
// }
// //

// styled-components
const variantStyles = props => {
  switch (props.variant) {
    case 'example-1':
      return css`
        background: red;
      `  
    default:
      return css`
        background-color: ${props.theme.colors[props.variant]}
      `
  }
}
export const buttonStyle = css`
  font-size: 1.5rem;
  line-height: 4rem;
  display: inline-block;
  border-radius: .2rem;
  padding: 0 2rem;
  cursor: pointer;
  
  color: white;
  background: ${props => props.theme.colors.baseDark}
  // background-color: var(--theme-colors-baseDark);
  &:hover {
    background-color: rgb(98, 58, 162);
  }

  ${variantStyles}
`

export const Button = styled.button`
  ${buttonStyle}
`