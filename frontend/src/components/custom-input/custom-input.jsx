import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: ${ props => props.width ? props.width : '100%' };
    border:none;
    border: 0.5px solid ${ props => props.borderColor ? props.borderColor : '#9D9D9D'};
    border-radius: 4px;
    height: 100%;
    font-size: 18px;
    text-align: center;
    background: none;
    outline: none;

`
const Label = styled.label`
    position: absolute;
    top: ${ props => props.top ? props.top : 'center'};
    background: white;
    left: ${ props => props.left ? props.left : '0'};
    transition: 0.3s;
    padding: 0 3px 3px;
    height: auto;
    color: black;
    z-index: -1;
    text-align: center;
    font-size: ${ props => props.fontsize ? props.fontsize : '0px'};
`
const Group = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    display:flex;
    justify-content: center;
    margin: ${ props => props.margin ? props.margin : '30px'} 0;
    transition: 0.3s
`

const Img = styled.div`
    background: ${ props => props.uri ? `url(${props.uri}) no-repeat` : '' };
    background-size: 30px;
    background-position: center;
    height: 40px;
    width: 90px;
`

function CustomInput({icon, title, label, handleChange, margin, ...otherProps}) {
    return (
    <Group>

        {
            icon ? <Img uri={icon} title={title} /> : ''

        }

        <div style={{height:'100%', position: 'relative'}} >
        <Input className='form-input' onChange={handleChange} title={title} {...otherProps} required/>

                {label ? 
                    (<Label
                        margin={margin ? margin : '30px'}
                        fontsize={otherProps.value.length > 0 ? '15px' : '17px'}  
                        top={otherProps.value.length > 0 ? '-30px' : '3px'} 
                        left={otherProps.value.length > 0 ? '10px' : '30px'} 
                        >
                        {label}
                    </Label>)        
                : null 
                }
        </div >
   </Group>
    )
}

export default CustomInput;
