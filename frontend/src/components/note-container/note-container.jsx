import React from 'react';
import styled from 'styled-components'

import LeftArrowSvg from '../img/left-arrow-icon.svg'
import TrashCan from '../img/trashcan-icon.svg'

const Wrapper = styled.div`
    position: absolute;
    width: auto;
    height: 85%;
    bottom: 0;
    border: 1px solid black;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    margin-top: 100px;
`

const Header = styled.header`
    padding: .5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;
`

const Input = styled.input`
    width: 75%;
    height: 100%;
    text-align: center;
    font-size: 30px;
    outline: none;
    border: none;
`

const LeftArrowIcon = styled.button`
    background: url(${LeftArrowSvg}) no-repeat;
    background-size: 60%;
    background-position: right;
    width: 40px;
    height: 40px;
    border:none;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        transform: translateX(5px);
    }
`

const TrashCanIcon = styled.button`
    background: url(${TrashCan}) no-repeat;
    background-size: 60%;
    background-position: left;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        transform: translateX(-5px);
    }
`

const Section = styled.section`
    position: absolute;
    width: 95%;
    height: 80%;
`
const TextArea = styled.textarea`
    text-align: center;
    width: 100%;
    height: 100%;
    border:none;
    outline: none;
`

function NoteContainer({handleSubmit, handleClick, handleChange, titleValue, contentValue}){
    return (
            <Wrapper>
                <form onSubmit={handleSubmit}>
                <Header>
                    <LeftArrowIcon/>
                    <Input type='text' value={titleValue} onChange={handleChange} name='title' placeholder='Title'/>
                    {handleClick ? <TrashCanIcon onClick={handleClick}/> : ''}
                </Header>
                <Section>
                    <TextArea name='content' value={contentValue} onChange={handleChange} placeholder='Content'/>
                </Section>
                </form>
            </Wrapper>
    )
}

export default NoteContainer;
