export default class List<T extends { id: string; }> {
  private __index = {};
  private __items: T[];

  constructor(array?: Array<T>) {
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

  add(item: T) {
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

  concat(items: Array<T>) {
    items.forEach(item => {
      this.add(item);
    });
  }

  merge(items: Array<T>) {
    items.forEach(item => {
      this.add(item);
    })
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

  get(id): T {
    return this.__index[id];
  }

  get length() {
    return this.__items.length;
  }

  index(index): T {
    return this.__items[index];
  }

  sort(sortFunc?: (a: T, b: T) => number): Array<T> {
    if (sortFunc) {
      return this.__items.sort(sortFunc);
    } else {
      return this.__items.sort();
    }
  }

  asArray(): Array<T> {
    return this.__items;
  }

  map(func: (a: T) => any) {
    return this.__items.map(func);
  }

  forEach(func: (a: T) => void) {
    return this.__items.forEach(func);
  }

  filter(func: (a: T) => boolean): Array<T> {
    return this.__items.filter(func);
  }

  contains(target, recognizeFunc: (a: T) => boolean) {
    let rec;
    if (recognizeFunc) {
      rec = recognizeFunc;
    } else {
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
