class ModeMap {
  mapData = {};
  constructor(initMapData = []) {
    for (const data of initMapData) {
      this.mapData[data[0]] = data[1];
    }
  }
  set(key, value) {
    this.mapData[key] = value;
  }
  get(key) {
    return this.mapData[key];
  }
  has(key) {
    return this.mapData.hasOwnProperty(key);
  }
  keys() {
    return Object.keys(this.mapData);
  }
  entries() {
    return this.mapData;
    // return Object.entries(this.mapData);
  }
  values() {
    return Object.values(this.mapData);
  }
  forEach(cbFunc) {
    for (const key in this.mapData) {
      cbFunc(this.mapData[key], key);
    }
  }
}

const map = new ModeMap();

class ModeSet {
  _setData = [];
  constructor(initSetData = []) {
    for (const item of initSetData) {
      if (this._setData.indexOf(item) !== -1) {
        return true;
      }
      this._setData.push(item);
    }
  }

  add(data) {
    for (const iterator of this._setData) {
      if (iterator === data) {
        return false;
      }
    }
    this._setData.push(data);

    return this._setData;
  }

  entries() {
    const entries = [];
    for (const item of this._setData) {
      entries.push([item, item]);
    }
    return entries;
  }

  delete(item) {
    this._setData = this._setData.filter((de) => {
      if (de !== item) {
        return true;
      }
      return false;
    });

    return this._setData.includes(item);
  }

  keys() {
    return Object.values(this._setData);
  }

  value() {
    return Object.values(this._setData);
  }

  has(key) {
    return this._setData.includes(key);
  }

  clear() {
    this._setData = [];
  }

}

const set = new ModeSet([["fgvdg", "ghfg", "uno", "uno", "uno"]]);
const set2 = new Set([["fgvdg", "ghfg", "uno", "uno", "uno"]]);

let val;

val = set.keys();
console.log(val);

console.log("");

val = set2.size;

console.log(val);
