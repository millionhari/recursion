// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var bank = [];

	function lookThrough(element){
		var child = element.children;
		for (var i = 0 ; i < child.length ; i++){
			if (child[i].classList.contains(className)){
				bank.push(child[i]);
			}
			if (child[i].hasChildNodes()){
				lookThrough(child[i]);
			}
		}
	}

	lookThrough(document);

	return bank;
};