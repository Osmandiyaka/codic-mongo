"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_client_1 = require("./db-client");
var TaskImpl = /** @class */ (function () {
    function TaskImpl(dbUrl) {
        this.dbUrl = dbUrl;
        this.taskModel = [];
        this.list = this.taskModel;
        this.db = db_client_1.default.connect(this.dbUrl);
    }
    TaskImpl.prototype.all = function () {
        throw new Error("Method not implemented.");
    };
    TaskImpl.prototype.get = function (name) {
        throw new Error("Method not implemented.");
    };
    TaskImpl.prototype.save = function (activity) {
        this.db.then(function (db) {
        }).catch(function (err) {
        });
    };
    TaskImpl.prototype.clear = function () {
        throw new Error("Method not implemented.");
    };
    return TaskImpl;
}());
exports.default = TaskImpl;
