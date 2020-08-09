import React from 'react';
import {connect} from 'react-redux'
import {useQuery} from '@apollo/client'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

import {getUserNotes} from '../../queries/queries'
 
import Notes from '../../components/notes/notes'
import Logo from '../../components/logo/logo'
import ErrorPage from '../../components/error-page/error-page'

const Homepage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`
const Header = styled.header`
    width: 100%;
    margin-top: 55px;
`

const Section = styled.section`
    padding: 3em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    grid-gap: 2em;
`

function HomePage({userid,history}) {
    if(userid === undefined || userid === 'undefined' )  history.push('/')

    const {loading, error, data} = useQuery(getUserNotes, {
        variables: {id: userid},
        pollInterval: 1000
    })

    console.log(loading, error, data)

    if(loading) return(
        <Homepage>
            <Logo/>
        </Homepage>
    )

    if(error) return(
        <Homepage>
            <ErrorPage/>
        </Homepage>
    )

    if(data) return (
        <Homepage>
            <Header />

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