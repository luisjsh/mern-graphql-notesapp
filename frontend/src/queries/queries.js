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