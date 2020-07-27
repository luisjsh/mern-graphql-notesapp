const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/notes')

const { mongoose } = require('./database')

const app = express()


//setting 
app.set('PORT', process.env.PORT || 4000)


//allow cross-origin
app.use(cors())


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use('/login', require('./routes/login.routes'))


//deploy
app.listen(app.get('PORT'), ()=>{
    console.log(app.get('PORT'))
})
