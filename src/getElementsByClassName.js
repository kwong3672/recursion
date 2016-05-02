// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // your code here
  element = element || document.body;
  var results = [];
  var childElements = element.childNodes;


  if (element.nodeType === 1){

    if (element.classList.contains(className)){
      results.push(element);
    }

  }

  // if (classes.indexOf(className) => 0){
  //   return results.push(element)
  // } 

  for (var i = 0; i < childElements.length; i++){
    var childResults = getElementsByClassName(className, childElements[i]);
    results = results.concat(childResults);
  }

  return results;
};
