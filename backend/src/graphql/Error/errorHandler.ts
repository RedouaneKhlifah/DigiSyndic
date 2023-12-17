class CustomError extends Error {
    extensions: {
        validationErrors?: { field: string; message: string }[];
        kind?: string;
    };

    constructor(
        message: string,
        extensions?: {
            validationErrors?: { field: string; message: string }[];
            kind?: string;
        }
    ) {
        super(message);

        this.extensions = extensions || {};

        // Set the prototype explicitly to ensure it's an instance of CustomError
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

export default CustomError;
