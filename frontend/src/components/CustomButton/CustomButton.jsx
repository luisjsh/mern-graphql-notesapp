import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
width: ${props => props.width ? props.width : '145px'};
background: white;
height: 46px;
border-radius:4px;
border: 1px solid ${props => props.borderColor ? props.borderColor : 'black'};
transition: 0.3s;
cursor: pointer;
color: ${props => props.fontColor ? props.fontColor : 'black'};
margin: ${props => props.margin ? props.margin : '0'};
font-size: ${props => props.fontSize ? props.fontSize : '20px'};
position: ${props => props.position ? props.position : ''};
bottom: ${props => props.bottom ? props.bottom : ''};

&:hover{
    background: black;
    color: white;
}
`

function CustomButton({handleClick, children, ...otherProps}) {
  return (
    <Button 
      onClick={handleClick}
      {...otherProps}
      >
        {children}
    </Button>
    )
}

export default CustomButton;
