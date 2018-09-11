var db = require("../config/db.js");
var DefinitionSchema = db.Schema({
    logType: { type: String },
    description: { type: String },
    owner: { type: db.Schema.Types.ObjectId, ref:'User' }
});

module.exports = DefinitionSchema;