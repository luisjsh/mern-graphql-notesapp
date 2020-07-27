import React from 'react';
import styled from 'styled-components'

import Title from '../../components/title/title'
import SignUp from '../../components/signup-component/signup'

const Homepage = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
position: absolute;
z-index: -1;
width: 100%;
height: 100%;
line-height: 40px;
`

const Header = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
`

const Section = styled.div`
width: 100%;
height: 100%;
display: flex;
position: relative;
align-items: center;
justify-content: space-around;
margin-bottom: 10px;
`


function LandingPage() {
    return (
        <Homepage>
            <Header>
            <Title fontSize='40px' lineHeight='40px'>The Notes app you need.</Title>
            <Title fontSize='20px' lineHeight='0px' position='absolute' bottom='30px' before='content: "\005E";'>Swipe up to sign up</Title>
            </Header>

            <Section>
                <SignUp/>
            </Section>
        </Homepage>
    )
}

export default LandingPage;
