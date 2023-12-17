export const sanitizer = <T extends Record<string, any>>(data: T): T => {
    if (typeof data !== "object" || Object.keys(data).length === 0) {
        throw new Error("Please provide a non-empty object for sanitization.");
    }
    const SanitizedData: Record<string, any> = {};

    Object.keys(data).forEach((key) => {
        if (typeof data[key] === "object" && data[key] != null) {
            // If the value of the key is an object, recursively sanitize its properties
            SanitizedData[key] = sanitizer(data[key]);
        } else {
            SanitizedData[key] = data[key].customTrim();
        }
    });

    return SanitizedData as T;
};
