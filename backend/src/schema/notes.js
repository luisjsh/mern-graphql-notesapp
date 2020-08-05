const graphql = require('graphql')

const User = require('../models/user')
const Notes = require('../models/notesModel')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLSchema,
    GraphQLList
} = graphql

const NotesType = new GraphQLObjectType({
    name: 'note',
    fields: ( )=>({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        content: {type: GraphQLString},
        user: {
            type: userType,
            resolve(parent, args){
                return User.findById(parent.userid)
            }
        }        
    })
})

const userType = new GraphQLObjectType({
    name: 'user',
    fields: ( )=>({
        id: {type: GraphQLID},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        username: {type: GraphQLString},
        notes:{
            type: new GraphQLList(NotesType),
            async resolve (parent, args){
                return await Notes.find({userid: parent.id})
            }
        }
    })  
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryTipe',
    fields:{
        note:{
            type: NotesType,
            args: { userid: {type: GraphQLID} },
            resolve(parent, args){
                return  Notes.findById(args.userid)
            }
        },
        notes:{
            type: new GraphQLList(NotesType),
            resolve(parent, args){
                return Notes.find()
            }
        },
        noteid:{
            type: NotesType,
            args: { id: {type: GraphQLID} },
            resolve(parent, args){
                return  Notes.findById(args.id)
            }
        },
        users:{
            type:new GraphQLList(userType),
            resolve(parent, args){
                return User.find()
            }
        },
        user:{
          type:userType,
          args: { id: {type: GraphQLID}},
          resolve(parents, args){
              return User.findById(args.id)
          }  
        },
        useremail:{
            type:userType,
            args: { email: {type:GraphQLString}},
            resolve(parents, args){
                return User.findOne({email: args.email})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addUser:{
            type: userType,
            args: {
                email: { type:GraphQLString},
                password: { type:GraphQLString },
                username: { type:GraphQLString }
            },
            resolve(parent, args){
                let user = new User({
                        email: args.email,
                        password: args.password,
                        username: args.username
                })
                return user.save()
            }
        },
        userChangePassword:{
            type: userType,
            args: {
                id: { type:GraphQLID},
                password: { type:GraphQLString }
            },
            async resolve(parent, args){
                await User.update({_id:args.id}, {$set: {password: args.password}})
                return await User.findOne({_id: args.id})
            }
        },
        addNote: {
            type: NotesType,
            args: {
                id: {type: GraphQLID},
                title: {type:GraphQLString},
                content: {type:GraphQLString},
                user: {type:GraphQLString}
            },
            resolve(parent, args){
                let note = new Notes({
                    title: args.title,
                    content: args.content,
                    userid: args.id
                })
                note.save()
                return note
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})