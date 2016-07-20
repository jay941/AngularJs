var sudoApp=angular.module('sudoApp');
sudoApp.controller('loginCtrl',function($scope,$location)
{ 

$scope.submit=function(email,pwd)
{
$scope.email=email;
$scope.pwd=pwd;

var e="jay@jay.com";
var p="jay";


if(email==e && pwd==p)
{
	$location.path('/home');
	}
 else{
       $location.path('/signin');
        alert("Invalid Email and password");
    }

    

}

});


