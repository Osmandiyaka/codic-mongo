"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var DbClient = /** @class */ (function () {
    function DbClient() {
    }
    DbClient.connect = function (url) {
        try {
            return mongodb_1.MongoClient.connect(url).then(function (db) { return db.db('codic'); });
        }
        catch (err) {
            return null;
        }
    };
    return DbClient;
}());
exports.default = DbClient;
