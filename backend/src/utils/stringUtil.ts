declare global {
    interface String {
        customTrim(): string;
    }
}

String.prototype.customTrim = function (): string {
    return this.replace(/ +/g, " ").trim();
};

export {};
