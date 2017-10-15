"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class List {
    constructor(array) {
        this.__index = {};
        this.__items = [];
        this.__index = {};
        if (!array || !array.length) {
            this.__items = [];
            return;
        }
        this.__items = array;
        for (let i = 0, l = array.length, __index = this.__index; i < l; i++) {
            let item = array[i];
            __index[item.id] = item;
        }
    }
    add(item) {
        let id = item.id;
        let __items = this.__items;
        for (let i = 0, l = __items.length; i < l; i++) {
            if (__items[i].id === id) {
                for (let key in item) {
                    __items[i][key] = item[key];
                }
                return;
            }
        }
        if (!this.__index[id]) {
            this.__index[id] = item;
        }
        __items.push(item);
    }
    concat(items) {
        items.forEach(item => {
            this.add(item);
        });
    }
    deleteId(id) {
        let item = this.__index[id];
        if (item) {
            delete this.__index[id];
        }
        let __items = this.__items;
        for (let i = 0, l = __items.length; i < l; i++) {
            if (__items[i].id === id) {
                __items.splice(i, 1);
                return;
            }
        }
    }
    get(id) {
        return this.__index[id];
    }
    get length() {
        return this.__items.length;
    }
    index(index) {
        return this.__items[index];
    }
    sort(sortFunc) {
        if (sortFunc) {
            return this.__items.sort(sortFunc);
        }
        else {
            return this.__items.sort();
        }
    }
    asArray() {
        return this.__items;
    }
    map(func) {
        return this.__items.map(func);
    }
    forEach(func) {
        return this.__items.forEach(func);
    }
    filter(func) {
        return this.__items.filter(func);
    }
    contains(target, recognizeFunc) {
        let rec;
        if (recognizeFunc) {
            rec = recognizeFunc;
        }
        else {
            rec = (obj) => {
                return obj === target;
            };
        }
        for (let obj of this.__items) {
            if (rec(obj)) {
                return true;
            }
        }
        return false;
    }
}
exports.default = List;
