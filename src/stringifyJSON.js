// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'object'){
    
    if (Array.isArray(obj)){
    var array = [];
      for (var i = 0; i < obj.length; i++){
        // if (obj[i] === undefined || typeof obj[i] === 'function'){
        //   result += 'null'
        // }
        array.push(stringifyJSON(obj[i]));  
      }
      return '[' + array + ']';
    }

    else if (obj === null){
      return 'null'
    }

    else{
      var object = [];
      for (var key in obj){
        if (obj[key] === undefined || typeof obj[key] === 'function') {
          
        }
        else {
          object.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
      return '{' + object + '}';
    }
  }


  if (typeof obj === 'string'){
    return '"' + obj + '"';
 // } else if (typeof obj === 'function' || typeof obj === 'undefined'){
 //   return ;
  }
  else {
    return '' + obj;
  }
};
