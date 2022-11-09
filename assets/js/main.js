let plotArr = [];
class Plot {
  //set
  pose(key, data) {
    plotArr.push({ [key]: data });
  }

  //has
  exists(key) {
    for (const props of plotArr) {
      return props.hasOwnProperty(key);
    }
  }

  //get
  earn(key) {
    for (const props of plotArr) {
      if (props.hasOwnProperty(key)) {
        for (const keye in props) {
          console.log(props[keye]);
        }
        return false;
      }
    }
  }

  //delete
  remove(key) {
    plotArr = plotArr.filter((filtrate) => {
      if (filtrate.hasOwnProperty(key)) {
        return true;
      }
    });
  }

  //size
  capacity() {
    return plotArr.length;
  }

  //keys
  getKeys() {
    for (const props of plotArr) {
      for (const keye in props) {
        console.log(keye);
      }
    }
  }

  //Values
  getValues() {
    for (const props of plotArr) {
      for (const keye in props) {
        console.log(props[keye]);
      }
    }
  }

  //entries
  record() {
    this.arr = [];
    for (const props of plotArr) {
      this.arr.push(props);
    }
    return this.arr;
  }

  // clear
  clinse() {
    plotArr = [];
  }
}

const plot = new Plot();
// plot.pose(true, "Jon");
plot.pose("Apples", 500);
 

