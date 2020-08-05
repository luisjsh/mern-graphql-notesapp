import React, {useState, useEffect} from 'react';
import {useQuery, useMutation} from '@apollo/client'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {getNoteWithId, addNoteMutation} from '../../queries/queries'

import CustomInput from '../../components/custom-input/custom-input'
import CustomButton from '../../components/CustomButton/CustomButton'
import Logo from '../../components/logo/logo'

function NotePage({userid, history, match}) {
    const {loading, error, data} = useQuery(getNoteWithId,{
        variables:{
            id: match.params.id
        }
    }) 

    const [note, setNote] = useState({
        title: data ? data.noteid.title : 'a',
        content: data ? data.noteid.content : '',
        updated: false
    })

    const formHandler = (event)=>{
        let {name, value} = event.target
        setNote({...note, [name]: value})
    }
    
    const submitHandler = (event)=>{
        event.preventDefault()
       /* const {data} = addNote({
            variables:{
                id: userid,
                title: note.title,
                content: note.content,
            }
        })
        history.push('/homepage')*/
    }

    if(data && note.updated == false) setNote({
        title: data.noteid.title,
        content: data.noteid.content, 
        updated: true
    })

    if (loading) return <Logo/>

    if(data.noteid !== null) return (
        <div style={{padding: '30px'}}>
        <form onSubmit={submitHandler}>
            <CustomInput type='text' name='title' onChange={formHandler} value={note.title}/>
            <CustomInput type='text' name='content' onChange={formHandler} value={note.content}/>
            <CustomButton>Submit!</CustomButton>
        </form>
        </div>
    )
}

const mapStatetoProps = ({user: {userid}})=>{
    return ({
        userid
    })
}

export default connect (mapStatetoProps) (withRouter(NotePage));
