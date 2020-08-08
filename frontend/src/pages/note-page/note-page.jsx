import React, {useState, useEffect} from 'react';
import {useQuery, useMutation} from '@apollo/client'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

import {getNoteWithId, updateNote, destroyNote} from '../../queries/queries'

import NoteContainer from '../../components/note-container/note-container'
import Logo from '../../components/logo/logo'

const Page = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

function NotePage({userid, history, match}) {
    const {loading, error, data} = useQuery(getNoteWithId,{
        variables:{
            id: match.params.id
        },
        pollInterval: 500
    }) 

    const [note, setNote] = useState({
        title: data ? data.noteid.title : 'a',
        content: data ? data.noteid.content : '',
        updated: false
    })

    const [UpdateNote] = useMutation(updateNote)
    const [DestroyNote] = useMutation(destroyNote)

    const formHandler = (event)=>{
        let {name, value} = event.target
        setNote({...note, [name]: value})
    }
    
    const handleClick = (event)=>{
        event.preventDefault()
        const {data} = DestroyNote({
            variables:{
                id: note.id
            }
        })
        history.push('/homepage')
    } 

    const submitHandler = async (event)=>{
        event.preventDefault()
        const {data} = UpdateNote({
            variables:{
                id: note.id,
                title: note.title,
                content: note.content,
                userid: userid
            }
        })
        history.push('/homepage')
        await setNote({...note, updated: false})
        console.log(note)
    }

    if(data && note.updated == false) setNote({
        id: match.params.id,
        title: data.noteid.title,
        content: data.noteid.content, 
        updated: true
    })
    
    if (loading) return(
        <Page>
            <Logo/>
        </Page>
    )

    if(data.noteid !== null) return (
        <Page>
            <NoteContainer 
                handleSubmit={submitHandler}
                handleClick={handleClick} 
                handleChange={formHandler} 
                titleValue={note.title} 
                contentValue={note.content}
                />
        </Page>
    )
}

const mapStatetoProps = ({user: {userid}})=>{
    return ({
        userid
    })
}

export default connect (mapStatetoProps) (withRouter(NotePage));
