// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  var output = '';
  
  
  if ( (typeof obj === undefined || typeof obj === 'function' || typeof obj === 'symbol') || 
        obj === NaN || obj === null || obj === Infinity ) {
    // console.log("null");
    return 'null';
  }
  
  if ( typeof obj === 'string') {
    return '"' + obj.toString() + '"';
  } else if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj.toString();
  }
  

  
  if (Array.isArray(obj)) {
    if (obj.length === 0 ) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      obj[i] = stringifyJSON(obj[i]);
    }
    output = '[' + obj.join(',') + ']';
    return output;
  } else if (typeof obj === 'object') {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      
      if (typeof obj[keys[i]] !== 'function' && typeof obj[keys[i]] !== 'undefined') {
        output += `${stringifyJSON(keys[i])}:${stringifyJSON(obj[keys[i]])}`;
        if (i < keys.length - 1) {
          output += ',';
        }
      } 
    }
    output = `{${output}}`;
    return output;
    // output = "{" + output+ "}";

  }
  
  // if primitive, return stringify primitive
  // if obj is an array stringify [contents]
  // 
  //   
  // Else if obj, stringify {contents} 
};
