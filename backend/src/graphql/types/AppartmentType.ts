import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} from "graphql";

export const ClientType = new GraphQLObjectType({
    name: "client",
    fields: () => ({
        full_name: { type: GraphQLString },
        phone_number: { type: GraphQLString }
    })
});

export const AppartmentType = new GraphQLObjectType({
    name: "Appartment",
    fields: () => ({
        id: { type: GraphQLID },
        number: {
            type: GraphQLInt
        },
        floor: {
            type: GraphQLInt
        },
        client: { type: ClientType },
        syndic_id: { type: GraphQLString }
    })
});

export default AppartmentType;
