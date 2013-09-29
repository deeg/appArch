var mongoose = require('mongoose');

module.exports = function (app) {

    var TeamSchema = new mongoose.Schema({
        name: {type: String},
        department: {type: String},
        sharepointUrl: {type: String},
        email: {type: String},
        standupTime: {type: String},
        teamLead: {type:  mongoose.Schema.Types.ObjectId},
        applications: [mongoose.Schema.Types.ObjectId],
        developers: [mongoose.Schema.Types.ObjectId],
        Notes: [String]
    });

    return mongoose.model('Team', TeamSchema);
}
