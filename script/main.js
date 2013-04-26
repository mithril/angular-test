var myApp = angular.module('myApp', []);

myApp.factory ('Avengers', function () {
	var Avengers = {};
	Avengers.cast =
	[
		{
			name:"Tony",
			character:"Iron Man"
		},
		{
			name:"Abriel",
			character:"curly moly"
		}
	];
	return Avengers;
})

.controller('AvengersCtrl', function ($scope, Avengers) {
	$scope.avengers = Avengers;
});
