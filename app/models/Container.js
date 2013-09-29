var mongoose = require('mongoose');

module.exports = function (app) {

    var ContainerSchema = new mongoose.Schema({
        name: {type: String},
        filePath: {type: String},
        scriptPath: {type: String},
        scriptInstructions: {type: String},
        restartedNightly: {type: Boolean},
        sudoUser: {type: String},
        server: {type: mongoose.Schema.Types.ObjectId},
        applications: [mongoose.Schema.Types.ObjectId],
        Notes: [String]
    });

    return mongoose.model('Container', ContainerSchema);
}
