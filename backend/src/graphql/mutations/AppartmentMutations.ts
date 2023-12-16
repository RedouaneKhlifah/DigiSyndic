import {
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString
} from "graphql/type";
import { createAppartmentResolver } from "../resolvers/AppartmentResolver";
import AppartmentType from "../types/AppartmentType";

const Client = new GraphQLInputObjectType({
    name: "ClientInput",
    fields: () => ({
        full_name: { type: GraphQLNonNull(GraphQLString) },
        phone_number: { type: GraphQLNonNull(GraphQLString) }
    })
});

const Appartment_args = {
    number: { type: GraphQLNonNull(GraphQLInt) },
    floor: { type: GraphQLNonNull(GraphQLInt) },
    client: { type: Client },
    syndic_id: { type: GraphQLNonNull(GraphQLString) }
};

const AppartmentMutations = {
    addAppartment: {
        type: AppartmentType,
        args: Appartment_args,
        resolve: createAppartmentResolver
    }
};

export default AppartmentMutations;
