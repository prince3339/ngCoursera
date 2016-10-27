(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter);

MsgController.$inject = ['$scope', '$filter', "lovesFilter"];
function MsgController($scope, $filter, lovesFilter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = .45;

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    //var output = $filter('uppercase')(msg);
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    msg = lovesFilter(msg);
    return msg;
  };


  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };
}

})();
