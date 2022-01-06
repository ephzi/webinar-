var app = angular.module('Myapp', []);
        app.controller('Mycontroller',function($scope,$window){
            $scope.clicking=function(){
               $window.location.href="db.php";
            }
        });
