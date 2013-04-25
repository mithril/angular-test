// The methods on module such as .controller, .factory, etc can be chained
// which is equivalent to doing
//		angular.module(...).controller(...);
//		angular.module(...).factory(...);

angular.module("MyApp", [])
// The code below is for using the global scope, $rootScope
.run(function ($rootScope) {
	$rootScope.data = {};
})
.controller("FirstCtrl", function ($scope) {

})
.controller("SecondCtrl", function ($scope) {

})

// The code below is for using the factory, Data
.factory("Data", function () {
	return { message: "This is from a factory." };
})
.controller("FactoryFirstCtrl", function ($scope, Data) {
	$scope.data = Data;
})
.controller("FactorySecondCtrl", function ($scope, Data) {
	$scope.data = Data;
});



