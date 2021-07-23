// bring in mongoose
const mongoose = require("mongoose");

// This is where we make our model
const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "name too short"]
    },
    image: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/6/67/Anti-pirate.png"
    },
    treasure: {
        type: Number,
        required: [true, "treasure chests are required"],
        min: [0, "can't have negative treasure chests"]
    },
    catchPhrase: {
        type: String,
        required: [true, "catch Phrase is required"],
        minlength: [2, "catch Phrase too short"],
        maxlength: [100, "catch Phrase too long"]
    },

    position: {
        type: String,
        minlength: [1, "must have a position"]
    },
    peg: {
        type: Boolean,
        default: false
    },
    eyePatch: {
        type: Boolean,
        default: false
    },
    hook: {
        type: Boolean,
        default: false
    }
    // 
});

// Finalize setting up my model
const Pirate = mongoose.model("Pirate", PirateSchema);
// We need to export this to other areas of my project
module.exports = Pirate;