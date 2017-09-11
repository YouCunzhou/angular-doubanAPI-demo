/*
* @Author: Administrator
* @Date:   2017-08-17 14:52:06
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-17 15:01:58
*/
(function  (angular) {
	angular.module('autoActive',[])
	.directive('autoActive',['$location',function($location){
		return {
			link:function(scope,ele,attr){
				ele.on('click',function(){
					ele.parent().children().removeClass('active');
					ele.addClass('active')
				})
				scope.loca=$location;
				scope.$watch('loca.url()',function(now,old){
					var hash = ele.find('a').attr('href').substr(1);
					if(now.startsWith(hash)){
						ele.parent().children().removeClass('active');
						ele.addClass('active')
					}
				})
			},
		}
	}])
})(angular)