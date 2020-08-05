import React, {useState} from 'react';
import {useMutation} from '@apollo/client'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {addNoteMutation} from '../../queries/queries'

import CustomInput from '../../components/custom-input/custom-input'
import CustomButton from '../../components/CustomButton/CustomButton'

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
