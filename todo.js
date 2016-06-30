/**
 * Created by kenzo on 2016/06/30.
 */
angular.module('myapp',[])
.controller('MainController',['$scope',function ($scope) {
    $scope.tasks =[
        {body:'こんにちは', checked:false},
        {body:'こんにちは', checked:false},
        {body:'こんにちは', checked:false}
    ];
    $scope.addtask = function() {
        $scope.tasks.push({'body':$scope.newtaskBody,'checked' : false});
        $scope.newtaskBody ="";
    }
    $scope.finishedTask = function () {
        count = 0;
        angular.forEach($scope.tasks ,function (task) {
            count+= task.checked ? 1 : 0;
        })
        return count;
    }
    $scope.delete = function () {
        var oldTasks = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(oldTasks,function (task) {
            if(!task.checked){
                $scope.tasks.push(task);
            }
        })
    }
}]);