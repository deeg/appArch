var mongoose = require('mongoose');

module.exports = function (app) {

    var ApplicationSchema = new mongoose.Schema({
        name: {type: String},
        url: {type: String},
        intUrl: {type: String},
        devUrl: {type: String},
        productOwner: {type: mongoose.Schema.Types.ObjectId},
        devTeam: {type: mongoose.Schema.Types.ObjectId},
        containers: [mongoose.Schema.Types.ObjectId],
        servers: [mongoose.Schema.Types.ObjectId],
        webservices: [mongoose.Schema.Types.ObjectId],
        databases: [mongoose.Schema.Types.ObjectId],
        cronJobs: [mongoose.Schema.Types.ObjectId],
        Notes: [String]
    });

    return mongoose.model('Application', ApplicationSchema);
}
