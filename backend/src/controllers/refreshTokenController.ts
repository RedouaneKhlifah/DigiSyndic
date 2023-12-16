import asynchandler from "express-async-handler";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/UserModel";
import { Types } from "mongoose";
import {
    accessTokenGenerator,
    clearRefreshTokenCookie,
    refreshTokenGenerator,
    setRefreshTokenCookie
} from "../utils/Jwt";

export const refreshTokenController = asynchandler(async (req, res) => {
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
        throw new Error("no refresh token provided");
    }

    const foundUser = await User.findOne({
        refresh_tokens: {
            $elemMatch: { refreshToken: refreshToken }
        }
    });

    // deteced hacked user
    if (!foundUser) {
        try {
            const decoded = jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET!
            );
            const userId = (decoded as JwtPayload)?.userId;

            const hackedUser = await User.findById(userId);
            if (hackedUser) {
                hackedUser.refresh_tokens =
                    [] as unknown as Types.DocumentArray<{
                        refreshToken: string;
                        createdAt: Date;
                    }>;
                await hackedUser.save();
            }
            clearRefreshTokenCookie(res);
            throw new Error("invalid token hacker");
        } catch {
            clearRefreshTokenCookie(res);
            throw new Error("refreshToken expired hacker");
        }
    }

    try {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!);

        const newRefreshToken = refreshTokenGenerator(foundUser.id);

        foundUser.refresh_tokens.push({
            refreshToken: newRefreshToken,
            createdAt: Date.now()
        });
        await foundUser.save();

        setRefreshTokenCookie(res, newRefreshToken);

        res.json({
            accessToken: accessTokenGenerator(foundUser.id),
            user: {
                id: foundUser.id,
                fullName: foundUser.fullName
            }
        });
    } catch (err) {
        foundUser.refresh_tokens.filter((rt) => {
            rt !== refreshToken;
        });
        await foundUser.save();
        clearRefreshTokenCookie(res);
        throw new Error("refreshToken expired");
    }
});

export default refreshTokenController;
