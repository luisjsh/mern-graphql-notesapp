import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import {ApolloClient, InMemoryCache,ApolloProvider} from '@apollo/client'


import Navbar from './components/Navbar/navbar'
import LandingPage from './pages/landing-page/landingpage'
import Homepage from './pages/homepage/homepage'
import ChangePassword from './pages/change-password/change-password'
import AddNote from './pages/add-note/add-note'
import NotePage from './pages/note-page/note-page'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
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
                    <Route exact path='/addnote' component={AddNote}/>
                    <Route path='/note/:id' component={NotePage}/>
                </Switch>
            </ApolloProvider>
        )
    }
}

export default App;
