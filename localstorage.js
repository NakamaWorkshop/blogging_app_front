window.LS = new class {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key) {
    var str = localStorage.getItem(key);
    return str && JSON.parse(str);
  }
};
