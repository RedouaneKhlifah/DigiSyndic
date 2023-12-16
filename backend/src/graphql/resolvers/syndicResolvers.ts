import {
    UpdateSyndic,
    createSyndic,
    getAllSyndics,
    getSyndicById
} from "../../services/SyndicService";
import CustomError from "../Error/errorHandler";
import { userT } from "../interfaces/syndic";

export async function createSyndicResolver(_parent: any, args: userT) {
    try {
        const Syndic = await createSyndic(args);
        return Syndic;
    } catch (error) {
        throw new Error("Failed to add Syndic");
    }
}

export async function UpdateSyndicResolver(_parent: any, args: userT) {
    try {
        const Syndic = await UpdateSyndic(args);
        return Syndic;
    } catch (error) {
        throw new CustomError(error);
    }
}

export async function getSyndicResolver(_parent: any, args: { id: string }) {
    try {
        const syndic = await getSyndicById(args.id);
        return syndic;
    } catch (error) {
        throw new CustomError(error);
    }
}

export async function getSyndicsResolver(_parent: any, _args: any) {
    try {
        return await getAllSyndics();
    } catch (error) {
        throw new CustomError(error);
    }
}
