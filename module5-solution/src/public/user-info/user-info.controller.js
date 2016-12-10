(function () {
  "use strict";

  angular.module('public')
  .controller('userInfoController', userInfoController);

  userInfoController.$inject = ['userInfoService', 'ApiPath'];
  function userInfoController(userInfoService, ApiPath) {
    var $ctrl = this;
    $ctrl.myInfo = userInfoService.showData();
    $ctrl.basePath = ApiPath;
    console.log($ctrl.myInfo);

  }


})();
