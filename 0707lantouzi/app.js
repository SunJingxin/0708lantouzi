console.log("app.js")
var app = angular.module("myApp",["ngRoute"]);
//路由部分
app.config(["$routeProvider",function ($routeProvider) {
  $routeProvider.when("/lanren",{
  	templateUrl:"./tpl/lanren.html",
  	controller:"lanrenCtrl"
  })
  .when("/lingqian",{
    templateUrl:"./tpl/lingqian.html",
    controller:"lingqianCtrl"
  })
  .when("/middle0",{
  	templateUrl:"./tpl/middle0.html",
  	controller:"middle0Ctrl"
  })
  .when("/xiangle",{ 
  	templateUrl:"./tpl/xiangle.html",
  	controller:"xiangleCtrl"
  })
  .when("/jifen",{
  	templateUrl:"./tpl/jifen.html",
  	controller:"jifenCtrl"
  })
  .otherwise({redirectTo:'/lanren'});
}])
console.log("app.js111")