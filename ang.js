   
        var app = angular.module('ngclickApp', []);
        app.controller('ngclickCtrl',function($scope){
            $scope.image=[{src:"C:\Users\swaathira\OneDrive\Documents\internship\heart.jpg",}];
            $scope.Invisible=false;
            $scope.visible=true;
            $scope.visbility=false;
            $scope.submit='';
            $scope.submit= function(){
               $scope.Invisible=true;
               $scope.visible=false;
               $scope.submit='SUCCESSFULLY REGISTERED';
            };
        });
     