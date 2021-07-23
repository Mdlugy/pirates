const Pirate = require("../models/Pirate.model");

// BASIC CRUD COMMANDS

// CREATE
module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json({ message: "Something went wrong when creating a Pirate!!", error: err }))
}

// READ ONE
module.exports.findOnePirate = (req, res) => {
    Pirate.find({ _id: req.params._id })
        .then(singlePirate => res.json(singlePirate))
        .catch(err => res.json({ message: "Something went wrong when finding one Pirate!!", error: err }))
}

// READ ALL
module.exports.findAllPirates = (req, res) => {
    Pirate.find({}).sort({ name: 1 }).collation({ locale: "en_US", numericOrdering: true })
        .then(allPirates => res.json(allPirates.sort()))
        .catch(err => res.json({ message: "Something went wrong when finding all the Pirates!!", error: err }))
}

// UPDATE
module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(400).json({ message: "Something went wrong when updating a Pirate!!", error: err }))
}

// DELETE
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params._id })
        .then(deletedPirate => res.json(deletedPirate))
        .catch(err => res.json({ message: "Something went wrong when deleting the Pirate!!", error: err }))
}