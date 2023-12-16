import { AppartmentT } from "../graphql/interfaces/appartment";
import Appartment from "../models/AppartementModel";

export async function getAllSyndicAppartments({ syndic_id }: AppartmentT) {
    return await Appartment.find({ syndic_id });
}

export async function getSyndicAppartmentId({ id, syndic_id }: AppartmentT) {
    const syndic = await Appartment.findOne({ _id: id, syndic_id });
    return syndic;
}

export async function createAppartment({
    number,
    floor,
    client,
    syndic_id
}: AppartmentT) {
    const appartment = await Appartment.create({
        number,
        floor,
        client: {
            full_name: client.full_name,
            phone_number: client.phone_number
        },
        syndic_id
    });
    return appartment;
}
