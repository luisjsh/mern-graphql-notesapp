const mongoose = require('mongoose')

const URL = 'mongodb://localhost/notesapp'

mongoose.connect(URL , { useNewUrlParser: true  })
    .then( db =>console.log('succefully connected'))
    .catch( err =>console.log(err))