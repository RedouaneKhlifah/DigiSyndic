import {
    createAppartment,
    getAllSyndicAppartments,
    getSyndicAppartmentId
} from "../../services/AppartmentServices";
import CustomError from "../Error/errorHandler";
import { AppartmentT } from "../interfaces/appartment";
import mongoose from "mongoose";

export async function createAppartmentResolver(
    _parent: any,
    args: AppartmentT
) {
    try {
        const appartment = await createAppartment(args);
        return appartment;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getAppartmentsResolver(_parent: any, args: AppartmentT) {
    try {
        return await getAllSyndicAppartments(args);
    } catch (error) {
        throw new CustomError(error);
    }
}

export async function getAppartmentResolver(_parent: any, args: AppartmentT) {
    try {
        return await getSyndicAppartmentId(args);
    } catch (error) {
        throw new CustomError(error);
    }
}

export async function updateAppartmentResolver(
    _parent: any,
    args: AppartmentT
) {
    try {
        const appartment = await getSyndicAppartmentId(args);
        if (!appartment) {
            throw new Error("Appartement not exist");
        }
        appartment.number = args.number;
        appartment.floor = args.floor;
        appartment.client.full_name = args.client.full_name;
        appartment.client.phone_number = args.client.phone_number;
        appartment.syndic_id = new mongoose.Types.ObjectId(args.syndic_id);
        await appartment.save();
        return appartment;
    } catch (error) {
        throw new CustomError(error);
    }
}
