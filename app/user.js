var Database = require('./database')
var Government = require('./government')
exports.setupNewUser = function(info, callback) {
    var user = {
        name: info.name,
        nameLowercase: info.name.toLowerCase()
    }
    try {
        Database.save(user, callback)
    } catch (err) {
        callback(err)
    }
}
exports.taxCalculation = function(info) {
    var user = {
        age: info.age
    }
    return Government.taxBase() * user.age
}