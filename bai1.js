var app = angular.module("myapp", []);
app.controller("bai1",function($scope){
    $scope.photo = "anh.png"
    $scope.fullname="Nguyễn Văn Tèo";
    $scope.birthday="20-1-1995";
    $scope.gender="Nam";
    $scope.mark="8.5";
});