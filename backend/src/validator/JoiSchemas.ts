import Joi from "joi";
import CustomError from "../graphql/Error/errorHandler";
import { errorTypes } from "../../../constant/Errors";

/**
 * @desc schema that defines custom Error Messages
 **/
const customErrorMessages: CustomErrorMessages = {
    "string.base": "must be a valid string.",
    "string.pattern.base": "can not contain spaces.",
    "string.min": "must be at least {#limit} characters long.",
    "string.max": "must not exceed {#limit} characters.",
    "string.email": "The email address is not valid.",
    "any.required": "is required.",
    "string.empty": "can not be empty.",
    "number.base": "must be a valid ID."
};

interface CustomErrorMessages {
    [key: string]: string;
}

/**
 * @userAuth
 */
export const authSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
}).messages(customErrorMessages);

/**
 * @appartement
 */

const ClientSchema = Joi.object({
    full_name: Joi.string().required(),
    phone_number: Joi.string().required()
}).messages(customErrorMessages);

export const AppartmentSchema = Joi.object({
    number: Joi.string().required(),
    floor: Joi.string().required(),
    client: ClientSchema.required(),
    syndic_id: Joi.string().required()
});

type ObjectSchema = Joi.ObjectSchema;

export const validator = (schema: ObjectSchema, data: object) => {
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
        const errors: { field: string; message: string }[] = error.details.map(
            (detail) => {
                const field: string | undefined = detail.path
                    ? Array.isArray(detail.path) && detail.path.length > 1
                        ? detail.path[1]?.toString()
                        : detail.path[0]?.toString()
                    : undefined;

                const errorMessage =
                    customErrorMessages[detail.type] || detail.message;

                return {
                    field: field || "",
                    message: errorMessage
                };
            }
        );
        throw new CustomError("validation error", {
            validationErrors: errors,
            kind: errorTypes.FORM_VALIDATION
        });
    }
};
