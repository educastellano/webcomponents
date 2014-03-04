(function () {
	'use strict';

	var Element = Object.create(HTMLButtonElement.prototype);
	
	Element.createdCallback = function() {
	  console.log('mybutton created')
	};

	document.registerElement('my-button', {
	  prototype: Element,
	  extends: 'button'
	});

})();
