import { sanitizer } from "../../utils/sanitizer";
import {
    createAppartment,
    getAllSyndicAppartments,
    getSyndicAppartmentId
} from "../../services/AppartmentServices";
import CustomError from "../Error/errorHandler";
import { AppartmentT } from "../interfaces/appartment";
import mongoose from "mongoose";
import { AppartmentSchema, validator } from "../../validator/JoiSchemas";

export async function createAppartmentResolver(
    _parent: any,
    args: AppartmentT
) {
    try {
        const sanitizedArgs = sanitizer(args);
        validator(AppartmentSchema, sanitizedArgs);
        const appartment = await createAppartment(sanitizedArgs);

        return appartment;
    } catch (error) {
        throw error;
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
        const sanitizedArgs = sanitizer(args);
        validator(AppartmentSchema, sanitizedArgs);

        const appartment = await getSyndicAppartmentId(sanitizedArgs);
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
        throw error;
    }
}
