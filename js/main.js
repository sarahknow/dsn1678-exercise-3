var theButton = $('.sales__left');
var detailsLeft = $('.details__left');

var buttonLeftClickHandler = function () {
	
	var currentState = detailsLeft.attr('data-state');
	
	if (currentState == 'active') {
		detailsLeft.attr('data-state', 'inactive');	
	} else {
		detailsLeft.attr('data-state', 'active');	
	}
	
};

theButton.on('click', buttonLeftClickHandler);


var theButton = $('.sales__right');
var detailsRight = $('.details__right');

var buttonRightClickHandler = function () {
	
	var currentState = detailsRight.attr('data-state');
	
	if (currentState == 'active') {
		detailsRight.attr('data-state', 'inactive');	
	} else {
		detailsRight.attr('data-state', 'active');	
	}
	
};

theButton.on('click', buttonRightClickHandler);