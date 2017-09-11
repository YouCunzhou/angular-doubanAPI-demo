/*
* @Author: Administrator
* @Date:   2017-08-16 19:19:47
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-17 13:11:13
*/
/*
'use strict';
(function (angular) {
	angular.module('jsonpservice',[])
	.service('myService',['$window',function($window){
		this.jsonp=function (url,arg,fn) {
			var script=$window.document.createElement('script');
			var str='';

			for(var key in arg){
				str += key + '=' + arg[key] +'&';
			}
			var fun = 'callback'+$window.Math.random().toString().substring(2)+(+new Date())
			$window[fun]=fn;
			url = url +'?'+ str + 'callback=' + fun;
			script.src=url;


		}
	}])
})(angular)
*/
(function(angular){
  // 1.创建模块
  var app = angular.module('jsonpservice', []);

  // 2.创建服务
  app.service('myService',['$window',function($window){
    this.jsonp = function(url, arg, fn){
        // 1.创建script标签
        var scrip = $window.document.createElement('script');
        // 2.设置src属性值
        // 2.1 拼接url及arg
        // arg {}  ?a=b&c=22
        var querystring = '';
        for(var key in arg){
          querystring += key+'='+ arg[key] +'&'
        }
        var funcName = 'myJsonp'+ $window.Math.random().toString().substr(2);    // 0.232
        url += '?' + querystring +'callback='+funcName;
        

        $window[funcName] = function(data){
          fn(data)
        delete $window[funcName]
        };
        // window.testFunc = function(data){
        //    // 2.5 当前数据返回时，调用 fn
        //   fn(data)
        // }

        scrip.src = url
       
        // 3.把script标签添加到dom上去
        $window.document.body.appendChild(scrip);

    }
  }])
})(angular)