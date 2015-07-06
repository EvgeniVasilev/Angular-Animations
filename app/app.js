 var app = angular.module('anim', ['ngAnimate']);
 app.controller('mainCtrl', mainCtrl);

 function mainCtrl($scope) {
   $scope.showTable = true;
   $scope.btnText = '';
 }
