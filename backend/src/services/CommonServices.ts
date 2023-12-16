import { Model, Document } from "mongoose";

export const CheckRecord = async (
    Model: Model<Document>,
    id: string
): Promise<Document> => {
    const existRecord = await Model.findById(id);
    if (!existRecord) {
        throw new Error("record not exist");
    }
    return existRecord;
};
