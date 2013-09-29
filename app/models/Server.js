var mongoose = require('mongoose');

module.exports = function (app) {

    var ServerSchema = new mongoose.Schema({
        name: {type: String},
        intName: {type: String},
        devName: {type: String},
        applications: [mongoose.Schema.Types.ObjectId],
        containers: [mongoose.Schema.Types.ObjectId],
        databases: [mongoose.Schema.Types.ObjectId],
        webservices: [mongoose.Schema.Types.ObjectId],
        cronJobs: [mongoose.Schema.Types.ObjectId],
        Notes: [String]
    });

    return mongoose.model('Server', ServerSchema);
}
