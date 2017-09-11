(function (angular) {
    angular.module('detail',['ngRoute','jsonpservice'])
        .config([
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider.when('/details/:id',{
                    templateUrl:'./detail/detail.html',
                    controller:'detailController'
                })
            }
        ])
        .controller('detailController',[
            '$scope',
            '$routeParams',
            'myService',
            function ($scope,$routeParams,myService) {
                myService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function (data) {
                    console.log(data);
                    $scope.data=data;
                    $scope.$apply();
                })
            }
        ])
})(angular);