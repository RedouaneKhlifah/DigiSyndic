class CustomError extends Error {
    kind?: string;

    constructor(message: string, kind?: string) {
        super(message);
        this.kind = kind;

        // Handle the condition to CastError ObjectId
        if (this.name === "CastError" && this.kind === "ObjectId") {
            this.message = "Resource not found";
        }

        // Set the prototype explicitly to ensure it's an instance of CustomError
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
export default CustomError;
