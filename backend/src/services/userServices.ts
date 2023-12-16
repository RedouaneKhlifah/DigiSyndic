import { userT } from "../graphql/interfaces/syndic";
import User from "../models/UserModel";

export async function findByEmail({ email }: userT) {
    const foundUser = await User.findOne({ email: email });
    if (!foundUser) {
        throw new Error("Email or pasword incorrect");
    }
    return foundUser;
}
