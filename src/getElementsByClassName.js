// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var output = [];
  
  var recurseClassName = function(node) {
  //if (body.childNodes.length > 0) {
    var children = node.childNodes;
    for(var i = 0; i < children.length; i++) {
      console.log(children[i].classList);
      if (children[i].classList !== undefined && children[i].classList.contains(className)) {
        //console.log("found an element");
        output.push(children[i]);
      }
      if (children[i].hasChildNodes() ) {
        recurseClassName(children[i]);  
      }
    }
  };
  recurseClassName(document);
  return output;
};
// Implement getElementsByClassName with your own function in src/getElementsByClassName.js, and make the specs pass, fixing them as necessary.
//  You should use document.body, element.childNodes, and element.classList
/*
The Document.body property represents the <body> or <frameset> node of the current document, or null if no such element exists.

The Node.childNodes read-only property returns a live NodeList of child nodes of the given element where the first child node is assigned index 0.
*/

