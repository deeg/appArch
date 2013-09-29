var mongoose = require('mongoose');

module.exports = function (app) {

    var CronJobSchema = new mongoose.Schema({
        name: {type: String},
        application: {type:  mongoose.Schema.Types.ObjectId},
        server: {type:  mongoose.Schema.Types.ObjectId},
        file: {type:  String},
        time: {type:  String},
        frequency: {type: String},
        type: {type: String},
        purpose: {type: String},
        Notes: [String]
    });

    return mongoose.model('CronJob', CronJobSchema);
}
