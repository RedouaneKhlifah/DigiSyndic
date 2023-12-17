import jwt from "jsonwebtoken";

async function isAuthenticated(
    resolve: any,
    parent: any,
    args: any,
    context: any,
    info: any
) {
    try {
        const authHeader: string = context?.headers?.authorization;

        if (!authHeader) {
            throw new Error("Not authorized - no token");
        }
        const token = authHeader.split(" ")[1];

        if (!token) {
            throw new Error("Not authorized - no token");
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
        context.payload = decoded as any;
        return await resolve(parent, args, context, info);
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            throw new Error("Invalid Token - Expired");
        }

        throw new Error(err);
    }
}

export const authMiddleware = {
    query: {
        syndic: isAuthenticated,
        syndics: isAuthenticated
    }
};
