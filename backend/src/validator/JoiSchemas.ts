import Joi from "joi";

/**
 * @desc schema that defines custom Error Messages
 **/
const customErrorMessages = {
    "string.base": "The {#label} field must be a valid string,{#label}",
    "string.pattern.base": "Password cannot conStain spaces,{#label}",
    "string.min":
        "The {#label} field must be at least {#limit} characters long,{#label}",
    "string.max":
        "The {#label} field must not exceed {#limit} characters.,{#label}",
    "string.email": "The email address is not valid.,{#label}",
    "any.required": "The {#label} field is required.,{#label}",
    "string.empty": "the {#label} Field cannot be empty,{#label}",
    "number.base": "The {#label} field must be a valid id.,{#label}"
};

/**
 * @userAuth
 */
export const authSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
}).messages(customErrorMessages);

export const sanitizer = (data: Record<string, string>) => {
    if (typeof data !== "object" || Object.keys(data).length === 0) {
        throw new Error("Please provide a non-empty object for sanitization.");
    }
    const SanitizedData: Record<string, any> = {};
    Object.keys(data).forEach((key) => {
        SanitizedData[key] = data[key].customTrim();
    });
    return SanitizedData;
};

type ObjectSchema = Joi.ObjectSchema;

export const validator = (schema: ObjectSchema, data: object) => {
    const { error } = schema.validate(data);
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        throw new Error(errors.join(", "));
    }
};
