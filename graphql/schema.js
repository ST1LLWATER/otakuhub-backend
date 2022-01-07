const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type User{
    firstName:String!
    lastName:String!
    username:String!
}

input UserInputData {
    firstName:String!
    lastName:String!
    username:String!
    password:String!
}

type Hello{
    hello: String!
    data:String!
}

type RootQuery{
    hello:Hello!
}

type RootMutation {
    createUser(userInput: UserInputData):User!
}

schema{
    query: RootQuery
    mutation: RootMutation 
}
`);
