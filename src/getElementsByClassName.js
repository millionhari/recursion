// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var bank = [];

	function lookThrough(element){
		var children = element.children;
		for (var i = 0 ; i < children.length ; i++){
			if(children[i].classList.contains(className)) {
				bank.push(children[i]);
			}
			if(children[i].hasChildNodes) {
				lookThrough(children[i]);
			}
		}
	}
	
	lookThrough(document);
	return bank;
};