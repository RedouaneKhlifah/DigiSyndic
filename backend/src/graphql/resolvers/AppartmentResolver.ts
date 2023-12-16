import {
    createAppartment,
    getAllSyndicAppartments,
    getSyndicAppartmentId
} from "../../services/AppartmentServices";
import CustomError from "../Error/errorHandler";
import { AppartmentT } from "../interfaces/appartment";

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
