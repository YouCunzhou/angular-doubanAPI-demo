/*
* @Author: Administrator
* @Date:   2017-08-16 10:54:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-16 11:42:00
*/
(function(angular) {
	angular.module('home_page',['ngRoute'])
	.config(['$routeProvider',function($routeProvider){
    	$routeProvider
    	.when('/home_page',{
    		templateUrl:'./home_page/home_page.html'
    	})
    }])
})(angular);