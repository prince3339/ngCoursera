(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('lovesAdvance', LovesFilterAdvance);
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


  $scope.$watch('stateOfBeing' ,function(newValue, oldValue) {
    console.log(newValue, oldValue);
  });

  $scope.$watch(function() {
    console.log("Digest !!");
  });
}

function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };
}

function LovesFilterAdvance() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  };
}

})();
