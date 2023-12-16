import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} from "graphql";
import UserType from "./userType";
import User from "../../models/UserModel";

const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        full_name: { type: GraphQLString },
        phone_number: { type: GraphQLString }
    })
});

const AppartmentType = new GraphQLObjectType({
    name: "Appartment",
    fields: () => ({
        id: { type: GraphQLID },
        number: {
            type: GraphQLInt
        },
        client: { type: ClientType },
        syndic: {
            type: UserType,
            resolve(parent, _args) {
                return User.findById(parent.syndic_id);
            }
        }
    })
});

export default AppartmentType;
