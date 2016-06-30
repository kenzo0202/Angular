/**
 * Created by kenzo on 2016/06/30.
 */
angular.module('myapp',[])
.controller('MainController',['$scope',function ($scope){
    $scope.users =[
        {'name':'kenzo','score':120},
        {'name':'kenzo','score':120},
        {'name':'kenzo','score':120}
    ];
    $scope.date =new Date();
}])
.controller('SubController',['$scope',function ($scope) {
    $scope.increment = function () {
        $scope.user.score++;
    }
}])