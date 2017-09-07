"use strict";
exports.__esModule = true;
var List = /** @class */ (function () {
    function List(array) {
        this.__index = {};
        this.__items = [];
        this.__index = {};
        if (!array || !array.length) {
            this.__items = [];
            return;
        }
        this.__items = array;
        for (var i = 0, l = array.length, __index = this.__index; i < l; i++) {
            var item = array[i];
            __index[item.id] = item;
        }
    }
    List.prototype.add = function (item) {
        var id = item.id;
        var __items = this.__items;
        for (var i = 0, l = __items.length; i < l; i++) {
            if (__items[i].id === id) {
                for (var key in item) {
                    if (__items[i].hasOwnProperty(key)) {
                        __items[i][key] = item[key];
                    }
                }
                return;
            }
        }
        __items.push(item);
    };
    List.prototype.concat = function (items) {
        var _this = this;
        items.forEach(function (item) {
            _this.add(item);
        });
    };
    List.prototype.deleteId = function (id) {
        var item = this.__index[id];
        if (item) {
            delete this.__index[id];
        }
        var __items = this.__items;
        for (var i = 0, l = __items.length; i < l; i++) {
            if (__items[i].id === id) {
                __items.splice(i, 1);
                return;
            }
        }
    };
    List.prototype.get = function (id) {
        return this.__index[id];
    };
    Object.defineProperty(List.prototype, "length", {
        get: function () {
            return this.__items.length;
        },
        enumerable: true,
        configurable: true
    });
    List.prototype.index = function (index) {
        return this.__items[index];
    };
    List.prototype.sort = function (sortFunc) {
        if (sortFunc) {
            return this.__items.sort(sortFunc);
        }
        else {
            return this.__items.sort();
        }
    };
    List.prototype.asArray = function () {
        return this.__items;
    };
    List.prototype.map = function (func) {
        return this.__items.map(func);
    };
    List.prototype.forEach = function (func) {
        return this.__items.forEach(func);
    };
    List.prototype.filter = function (func) {
        return this.__items.filter(func);
    };
    List.prototype.contains = function (target, recognizeFunc) {
        var rec;
        if (recognizeFunc) {
            rec = recognizeFunc;
        }
        else {
            rec = function (obj) {
                return obj === target;
            };
        }
        for (var _i = 0, _a = this.__items; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (rec(obj)) {
                return true;
            }
        }
        return false;
    };
    return List;
}());
exports["default"] = List;
