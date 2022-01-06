var app = angular.module('MyApp', []);
        app.controller('MyController',function($scope,$window){
            $scope.clicked=function(){
               $window.location.href="angular1.htm";
            }
            $scope.admin=function(){
              $window.location.href="admin.htm";
           
           }
        });






 