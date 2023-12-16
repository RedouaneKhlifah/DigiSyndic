import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql/type";
import { loginResolver } from "../resolvers/authResolvers";
import UserType from "../types/userType";

const auth_args = {
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) }
};

const AuthMutationType = new GraphQLObjectType({
    name: "AuthMutation",
    fields: () => ({
        accessToken: { type: GraphQLString },
        user: { type: UserType }
    })
});

const authMutation = {
    Login: {
        type: AuthMutationType,
        args: auth_args,
        resolve: loginResolver
    }
};

export default authMutation;
