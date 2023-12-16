import { GraphQLID, GraphQLList } from "graphql";
import UserType from "../types/userType";
import {
    getSyndicResolver,
    getSyndicsResolver
} from "../resolvers/syndicResolvers";

const syndicQueries = {
    syndic: {
        type: UserType,
        args: { id: { type: GraphQLID } },
        resolve: getSyndicResolver
    },
    syndics: {
        type: new GraphQLList(UserType),
        args: { id: { type: GraphQLID } },
        resolve: getSyndicsResolver
    }
};

export default syndicQueries;
