import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    fullName: {
        type: Number,
        required: [true, "Please fill the fullName"]
    },
    PhoneNumber: {
        type: String,
        ref: "User",
        required: [true, "Please provide a PhoneNumber"]
    }
});

const AppartmentSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: [true, "Please fill the number"]
    },
    client: {
        type: ClientSchema,
        required: [true, "Please provide a client"]
    },
    syndic_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide a syndic"]
    }
});

const Appartment = mongoose.model("Appartment", AppartmentSchema);

export default Appartment;
