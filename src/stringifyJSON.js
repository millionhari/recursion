// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    if (typeof(obj) === "function"){
      return "null";
    }
    if (typeof(obj) === "boolean"){
      return obj.toString();
    }
    if (typeof(obj) === "undefined"){
      return undefined;
    }
    if (obj === null){
      return "null";
    }
    if (typeof(obj) === "number"){
      return obj.toString();
    }
    if (typeof(obj) === "string"){
      return '"'+obj+'"';
    }
    if (Array.isArray(obj)){
      var bank = [];
      for (var i = 0 ; i < obj.length ; i++){
        bank.push(stringifyJSON(obj[i]));
      }
      return '['+bank+']';
    }
    if (Object.prototype.toString.call(obj) == "[object Object]"){
      var bankObj = [];
      for (var x in obj){
        if (typeof(obj[x]) !== "function" && typeof(x) !== "function" && typeof(obj[x]) !== "undefined"){
          bankObj.push(stringifyJSON(x) + ":" + stringifyJSON(obj[x]));
        } else {
          stringifyJSON();
        }
      }
      return '{'+bankObj+'}';
    }
};