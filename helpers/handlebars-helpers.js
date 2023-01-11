module.exports = {
  // hbs頁面模板中可以使用的method
  /*
    if(a === b){
      才會執行的東西
      在hbs模板裡才會顯示包起來的東西
    }
  */
  ifCond: function (a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this);
  },

  /*
    if(a !== b){
      才會執行的東西
      在hbs模板裡才會顯示包起來的東西
    }
  */
  ifNot: function (a, b, options) {
    return a !== b ? options.fn(this) : options.inverse(this);
  },
};
