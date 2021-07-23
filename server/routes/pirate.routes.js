const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    // CREATE
    app.post("/api/pirates/create", PirateController.createPirate);
    // READ ALL
    app.get("/api/pirates", PirateController.findAllPirates);
    // READ ONE
    app.get("/api/pirates/:_id", PirateController.findOnePirate);
    // UPDATE
    app.put("/api/pirates/update/:_id", PirateController.updatePirate);
    // DELETE
    app.delete("/api/pirates/delete/:_id", PirateController.deletePirate);
}