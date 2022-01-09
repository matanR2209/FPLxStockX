import {GraphQLObjectType, GraphQLSchema} from "graphql";

// all the queries and mutations we will have in our application.
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {} // all the queries we want to have in our applicaiton
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {} // all the queries we want to have in our applicaiton
})


export  const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})