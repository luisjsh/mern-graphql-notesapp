import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
 
import Notes from '../../components/notes/notes'
import Title from '../../components/title/title'

const Homepage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`
const Header = styled.header`
    width: 100%;
    margin-top: 100px;
    height: 10%;
    z-index: 0;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    background: white;
    align-items: center;
    box-shadow: 0px 4px 56px 15px rgba(255,255,255,1);
`

const Section = styled.section`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-around; 
    flex-wrap: wrap;
`

function homepage(props) {
    if(props.username === undefined || props.username === 'undefined' )  props.history.push('/')

    return (
        <Homepage>
            <Header>
                <Title position='sticky' bottom='0'>Notes</Title>
            </Header>

            <Section>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            <Notes>asdknasdkjsnd</Notes>
            </Section>
        </Homepage>
    )
}

const mapStatetoProps = ({user: {username}})=>{
    return{
        username
    }
}

export default connect(mapStatetoProps) (withRouter(homepage));
