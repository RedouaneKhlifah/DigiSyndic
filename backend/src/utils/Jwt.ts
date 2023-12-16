import jwt from "jsonwebtoken";
import { Response } from "express";

// generate a token from the signature jwt_secret
export const accessTokenGenerator = (id: string) => {
    const token = jwt.sign({ userId: id }, process.env.ACCESS_TOKEN_SECRET!, {
        expiresIn: "5min"
    });
    return token;
};

// // generate a token from the signature jwt_secret
export const refreshTokenGenerator = (id: string) => {
    const token = jwt.sign({ userId: id }, process.env.REFRESH_TOKEN_SECRET!, {
        expiresIn: "1d"
    });

    return token;
};

export function setRefreshTokenCookie(res: Response, token: string) {
    res.cookie("refreshToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 24 * 60 * 60 * 1000
    });
}

export function clearRefreshTokenCookie(res: Response) {
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 0
    });
}
