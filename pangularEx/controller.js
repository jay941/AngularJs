var mainApp=angular.module('mainApp');

mainApp.controller('myCtrl',function($scope)
{ var users = [{name:'jay'},{name:'jp'}];
$scope.getUsers=function()
{
	return users;
};

});