import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: [true, "Please fill the fullName"]
    },
    phone_number: {
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
    floor: {
        type: Number,
        required: [true, "Please fill the floor"]
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
