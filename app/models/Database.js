var mongoose = require('mongoose');

module.exports = function (app) {

    var DatabaseSchema = new mongoose.Schema({
        name: {type: String},
        server: {type:  mongoose.Schema.Types.ObjectId},
        applications: [mongoose.Schema.Types.ObjectId],
        webservices: [mongoose.Schema.Types.ObjectId],
        purpse: {type:  String},
        Notes: [String]
    });

    return mongoose.model('Database', DatabaseSchema);
}
