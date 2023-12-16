import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLEnumType,
    GraphQLList
} from "graphql";

const RoleEnumType = new GraphQLEnumType({
    name: "Role",
    values: {
        SUPERADMIN: { value: "superadmin" },
        SYNDIC: { value: "syndic" }
    }
});

const refresh_tokenType = new GraphQLObjectType({
    name: "refresh_token",
    fields: () => ({
        refreshToken: {
            type: GraphQLString
        },
        createdAt: {
            type: GraphQLString
        }
    })
});

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        fullName: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        role: { type: RoleEnumType },
        refresh_tokens: { type: new GraphQLList(refresh_tokenType) }
    })
});

export default UserType;
