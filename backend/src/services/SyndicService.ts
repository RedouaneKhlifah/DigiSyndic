import { hasher } from "../utils/De_Hasher";
import { userT } from "../graphql/interfaces/syndic";
import User from "../models/UserModel";

export async function getAllSyndics() {
    const syndics = await User.find({ role: "syndic" });
    return syndics;
}

export async function getSyndicById(id: string) {
    const syndic = await User.findOne({ _id: id, role: "syndic" });
    return syndic;
}

export async function createSyndic({ fullName, email, password }: userT) {
    password = await hasher(password);
    const syndic = await User.create({
        fullName,
        email,
        password
    });

    return syndic;
}

export async function UpdateSyndic({ id, fullName, email, password }: userT) {
    const foundSyndic = await User.findOne({ _id: id, role: "syndic" });
    if (!foundSyndic) {
        throw new Error("User not found");
    }
    foundSyndic.fullName = fullName;
    foundSyndic.email = email;
    foundSyndic.password = password;

    const syndic = await foundSyndic.save();

    return syndic;
}
