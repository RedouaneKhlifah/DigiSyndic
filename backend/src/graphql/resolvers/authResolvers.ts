import {
    accessTokenGenerator,
    refreshTokenGenerator,
    setRefreshTokenCookie
} from "../../utils/Jwt";
import { findByEmail } from "../../services/userServices";
import { userT } from "../interfaces/syndic";
import { Dehasher } from "../..//utils/De_Hasher";
import { MyContext } from "../interfaces/myContext";

export async function loginResolver(
    _parent: any,
    args: userT,
    context: MyContext
) {
    try {
        const foundUser = await findByEmail(args);
        await Dehasher(args.password, foundUser.password);

        const accessToken = accessTokenGenerator(foundUser.id);
        const refreshToken = refreshTokenGenerator(foundUser.id);
        foundUser.refresh_tokens.push({
            refreshToken: refreshToken,
            createdAt: Date.now()
        });
        await foundUser.save();
        setRefreshTokenCookie(context.res, refreshToken);

        return { accessToken: accessToken, user: foundUser };
    } catch (error) {
        throw new Error(error);
    }
}
