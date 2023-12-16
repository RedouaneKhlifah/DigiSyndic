import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";
import { graphqlHTTP } from "express-graphql";
import { applyMiddleware } from "graphql-middleware";

// import utiles
import "./utils/index";
// imported routes
import refreshTokenRoute from "./routes/refreshTokenRoute";
// graphQL
import schema from "./graphql/schema/Sheama";
import { authMiddleware } from "./middlewares/authMiddleware";
import { errorHandler, notFound } from "./middlewares/errorMiddleware";

dotenv.config();

connectDB();

const app = express();

app.use(cookieParser());

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);

const schemaWithMiddleware = applyMiddleware(schema, authMiddleware);

app.use("/refrech_token", refreshTokenRoute);

app.use(
    "/graphQl",
    graphqlHTTP({
        schema: schemaWithMiddleware,
        graphiql: process.env.NODE_ENV === "development"
    })
);

// use error Middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
