import {gql} from 'apollo-boost'

export const addUserMutation = gql`
    mutation($email: String!, $password: String!, $username: String! ){
        addUser(email: $email , password: $password, username: $username){
            username,
            id
        }
    }
`

export const getAllUsers = gql`
    {
        users{
            email,
            username
        }
    }
`

export const getUserWithEmail = gql`
    query getUserWithEmail($email: String!){
        useremail(email: $email){
            id,
            email,
            password
        }
    }
`

export const changeUserPassword = gql`
    mutation($id: ID!, $password: String!){
        userChangePassword(id: $id, password: $password){
            id,
            email,
            password
        }
    }
`

export const getUserNotes = gql`
    query getUserNotes($id: ID!){
        user(id: $id){
            notes{
                id,
                title,
                content
            }
        }
    }
`

export const addNoteMutation = gql`
    mutation addNote($id: ID!, $title:String!, $content: String!){
        addNote(id: $id, title:$title, content:$content){
            user {
              id
            },
            title,
            content
        }
    }
`

export const getNoteWithId = gql`
    query getNoteWithId ($id: ID!){
        noteid(id: $id){
            title,
            content
        }
    }
`

export const updateNote = gql`
    mutation updateNote($id: ID!, $title: String!, $content: String!){
        updateNote(id: $id, title: $title, content: $content){
            id
        }
    }
`

export const destroyNote = gql`
    mutation destroyNote($id: ID!){
        destroyNote(id: $id){
            id
        }
    }
`