import bcrypt from "bcrypt";

export async function hasher(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export async function Dehasher(password: string, userPssword: string) {
    const match = await bcrypt.compare(password, userPssword);
    if (!match) {
        throw new Error("password  not matched");
    }
}
