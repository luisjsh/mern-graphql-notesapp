import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import {ApolloProvider} from 'react-apollo' 
import ApolloClient from 'apollo-boost'


import Navbar from './components/Navbar/navbar'
import LandingPage from './pages/landing-page/landingpage'
import Homepage from './pages/homepage/homepage'
import ChangePassword from './pages/change-password/change-password'
import Notification from './components/notification/notification'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})


class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/homepage' component={Homepage}/>
                    <Route exact path='/changepassword' component={ChangePassword}/>
                </Switch>
            </ApolloProvider>
        )
    }
}

export default App;
