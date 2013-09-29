var mongoose = require('mongoose');

module.exports = function (app) {

    var WebserviceSchema = new mongoose.Schema({
        name: {type: String},
        url: {type: String},
        intUrl: {type: String},
        devUrl: {type: String},
        docUrl: {type: String},
        application: {type: mongoose.Schema.Types.ObjectId},
        server: {type: mongoose.Schema.Types.ObjectId},
        container: {type: mongoose.Schema.Types.ObjectId},
        productOwner: {type: mongoose.Schema.Types.ObjectId},
        team: {type: mongoose.Schema.Types.ObjectId},
        databases: [mongoose.Schema.Types.ObjectId],
        Notes: [String]
    });

    return mongoose.model('Webservice', WebserviceSchema);
}
