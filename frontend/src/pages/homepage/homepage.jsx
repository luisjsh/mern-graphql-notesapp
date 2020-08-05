import React from 'react';
import {connect} from 'react-redux'
import {useQuery, useMutation} from '@apollo/client'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

import {getUserNotes} from '../../queries/queries'
 
import Notes from '../../components/notes/notes'
import Title from '../../components/title/title'
import RoundButton from '../../components/round-button/round-button'

const Homepage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`
const Header = styled.header`
    width: 100%;
    margin-top: 100px;
    height: 10%;
    z-index: 1;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    background:white;
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

function HomePage({userid,history}) {
    if(userid === undefined || userid === 'undefined' )  history.push('/')

    const {loading, error, data} = useQuery(getUserNotes, {
        variables: {id: userid},
        pollInterval: 1500
    })
    console.log(loading, error, data, 'asdasd')

    return (
        <Homepage>
            <RoundButton onClick={()=>{history.push('/addnote')}} bottom='10px' right='10px' width='70px' height='70px' borderColor='black' position='fixed' HoverWidth='90px' HoverHeight='90px'/>
            <Header>
                <Title position='sticky' bottom='0'>Notes</Title>
            </Header>

            <Section>
                {
                    data ?
                    data.user.notes.map( ({id, title, content}) => (
                        <Notes key={id} title={title} handleClick={()=>history.push(`/note/${id}`)}>{content}</Notes>
                    ))
                    :
                    ''
                }
            </Section>
        </Homepage>
    )
}

const mapStatetoProps = ({user: {userid}})=>{
    return{
        userid
    }
}

export default connect(mapStatetoProps) (withRouter(HomePage));