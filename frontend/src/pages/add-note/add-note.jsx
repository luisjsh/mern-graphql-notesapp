import React, {useState} from 'react';
import {useMutation} from '@apollo/client'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {addNoteMutation} from '../../queries/queries'

import NoteContainer from '../../components/note-container/note-container'

function NotePage({userid, history}) {

    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    const [addNote] = useMutation(addNoteMutation)

    const formHandler = (event)=>{
        let {name, value} = event.target
        setNote({...note, [name]:value});
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        const {data} = addNote({
            variables:{
                id: userid,
                title: note.title,
                content: note.content,
            }
        })
        history.push('/homepage')
    }

    return (
        <NoteContainer
            handleSubmit={submitHandler}
            handleChange={formHandler}
            titleValue={note.title}
            contentValue={note.content}
            />
    )
}

const mapStatetoProps = ({user: {userid}})=>{
    return ({
        userid
    })
}

export default connect (mapStatetoProps) (withRouter(NotePage));
