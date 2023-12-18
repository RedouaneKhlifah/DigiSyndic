import { sanitizer } from "../../utils/sanitizer";
import {
    createAppartment,
    getAllAppartments,
    deleteAppartementById,
    getAppartmentById
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
        return await getAllAppartments(args);
    } catch (error) {
        throw new CustomError(error);
    }
}

export async function getAppartmentResolver(_parent: any, args: AppartmentT) {
    try {
        return await getAppartmentById(args);
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

        const appartment = await getAppartmentById(sanitizedArgs);
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

export async function deleteAppartmentResolver(
    _parent: any,
    args: AppartmentT
) {
    try {
        const foundAppartement = await getAppartmentById(args);
        if (!foundAppartement) {
            throw new Error("appartement not found");
        }
        const deletedAppartement = await deleteAppartementById(args);
        return deletedAppartement;
    } catch (error) {
        throw new Error(error);
    }
}
