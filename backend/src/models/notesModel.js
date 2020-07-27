const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotesSchema = new Schema({
    title: String,
    content: String,
    userid: String
})

module.exports = mongoose.model('notes', NotesSchema)