const express=require("express");
const { graphqlHTTP } = require("express-graphql");
const server=express();
const PORT =process.env.PORT || 5000;

const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

server.use(
    "/graphql",
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolver,
        graphiql: true,
    })
);

server.use(express.json());
server.use(express.urlencoded({extended:false}))

server.listen(PORT,()=> console.log(`Server Listening On Port ${PORT}`))