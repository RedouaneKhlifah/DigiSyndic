import {
    GraphQLSchema,
    GraphQLObjectType,
    Thunk,
    GraphQLFieldConfigMap
} from "graphql";

// sundic
import syndicQueries from "../queries/syndicQueries";
import syndicMutation from "../mutations/syndicMutations";
import authMutation from "../mutations/AuthMutations";

const query = new GraphQLObjectType({
    name: "query",
    fields: {
        ...syndicQueries
    } as unknown as Thunk<GraphQLFieldConfigMap<any, any>>
});

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        ...syndicMutation,
        ...authMutation
    } as unknown as Thunk<GraphQLFieldConfigMap<any, any>>
});
const schema = new GraphQLSchema({
    query,
    mutation
});

console.log(query);

export default schema;
