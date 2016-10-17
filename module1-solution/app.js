(function () {
  'use strict';
  angular.module('lunchCheck', [])
    .controller('lunchCheckController', lunchCheckFunction);
    lunchCheckFunction.$inject = ['$scope'];

    function lunchCheckFunction ($scope) {
      $scope.lunchMenu = "";
      $scope.showMenu = function () {
        if($scope.lunchMenu !== "") {
          $scope.lunchMenu =$scope.lunchMenu.split(" ").join();
          $scope.totalMenuItems = $scope.lunchMenu.split(",");

          //console.log($scope.lunchMenu);
        }else {
          $scope.totalMenuItems = 0;
        }
      }

      $scope.showMessage = function () {
        if($scope.totalMenuItems) {
          if($scope.totalMenuItems.length <= 3) {
            $scope.message = "Enjoy";
          }else{
            $scope.message = "Too much !";
          }
        }else {
          $scope.message = "Please enter data first";
        }
        //console.log($scope.lunchMenu);
      }
    }
})()
