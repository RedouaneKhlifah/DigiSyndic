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
import AppartmentMutations from "../mutations/AppartmentMutations";
import appartmentQueries from "../queries/appartmentQueries";

const query = new GraphQLObjectType({
    name: "query",
    fields: {
        ...syndicQueries,
        ...appartmentQueries
    } as unknown as Thunk<GraphQLFieldConfigMap<any, any>>
});

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        ...syndicMutation,
        ...authMutation,
        ...AppartmentMutations
    } as unknown as Thunk<GraphQLFieldConfigMap<any, any>>
});
const schema = new GraphQLSchema({
    query,
    mutation
});

export default schema;
