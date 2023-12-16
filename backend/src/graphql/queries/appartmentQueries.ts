import { GraphQLID, GraphQLList } from "graphql";
import AppartmentType from "../types/AppartmentType";
import {
    getAppartmentResolver,
    getAppartmentsResolver
} from "../resolvers/AppartmentResolver";

const appartmentQueries = {
    appartment: {
        type: AppartmentType,
        args: { id: { type: GraphQLID }, syndic_id: { type: GraphQLID } },
        resolve: getAppartmentResolver
    },
    appartments: {
        type: new GraphQLList(AppartmentType),
        args: { syndic_id: { type: GraphQLID } },
        resolve: getAppartmentsResolver
    }
};

export default appartmentQueries;
