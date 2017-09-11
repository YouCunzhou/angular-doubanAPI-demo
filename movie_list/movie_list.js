/*
* @Author: Administrator
* @Date:   2017-08-16 10:54:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-17 15:01:13
*/
(function(angular) {
	angular.module('movie_list',['ngRoute','jsonpservice'])
	.config(['$routeProvider',function($routeProvider){
    	$routeProvider
    	.when('/:movieType/:page?',{
    		templateUrl:'./movie_list/movie_list.html',
    		/*与ng-controller重复定义*/
    		controller:'theatersController'
    	})
			.otherwise({
                redirectTo:'/home_page'
			})
    }])
    .controller('theatersController',[
    	'$scope',
    	'$route',
    	'$routeParams',
    	'myService',
    	function($scope,$route,$routeParams,myService){
    	$scope.loading=true;
            console.log($routeParams);
            $scope.pageSize=5;
    	$scope.page=($routeParams.page || 1) - 0;
		var start =$scope.pageSize*($scope.page-1);
		$scope.getPage=function(nowPage){
			if(nowPage< 1 || nowPage > $scope.totalPage){
				return ;
			}
			$route.updateParams({page:nowPage})
		};
    	myService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movieType,{start:start,count:$scope.pageSize,q:$routeParams.q},function(data){
			$scope.data=data;
			$scope.total=data.total;
            $scope.totalPage=Math.ceil(data.total/$scope.pageSize);
            $scope.loading=false;
			$scope.$apply()
		})

    }])
})(angular);