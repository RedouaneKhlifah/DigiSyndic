import {
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString
} from "graphql/type";
import {
    createAppartmentResolver,
    updateAppartmentResolver
} from "../resolvers/AppartmentResolver";
import AppartmentType from "../types/AppartmentType";

const Client = new GraphQLInputObjectType({
    name: "ClientInput",
    fields: () => ({
        full_name: { type: GraphQLNonNull(GraphQLString) },
        phone_number: { type: GraphQLNonNull(GraphQLString) }
    })
});

const Appartment_args = {
    number: { type: GraphQLNonNull(GraphQLString) },
    floor: { type: GraphQLNonNull(GraphQLString) },
    client: { type: Client },
    syndic_id: { type: GraphQLNonNull(GraphQLString) }
};

const AppartmentMutations = {
    addAppartment: {
        type: AppartmentType,
        args: Appartment_args,
        resolve: createAppartmentResolver
    },
    updateAppartment: {
        type: AppartmentType,
        args: { id: { type: GraphQLNonNull(GraphQLID) }, ...Appartment_args },
        resolve: updateAppartmentResolver
    }
};

export default AppartmentMutations;
