import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql/type";
import UserType from "../types/userType";
import {
    UpdateSyndicResolver,
    createSyndicResolver
} from "../resolvers/syndicResolvers";

const syndic_args = {
    fullName: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) }
};

const syndicMutation = {
    addSyndic: {
        type: UserType,
        args: syndic_args,
        resolve: createSyndicResolver
    },
    UpdateSyndic: {
        type: UserType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) },
            ...syndic_args
        },
        resolve: UpdateSyndicResolver
    }
};

export default syndicMutation;
