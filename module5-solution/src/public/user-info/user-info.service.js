(function () {
  "use strict";

  angular.module('public')
  .service('userInfoService', userInfoService);

  userInfoService.$inject = [];
  function userInfoService() {
    var service = this;
    var userInfo;
    service.saveData = function (info) {
      console.log(info);
      userInfo = info;
      console.log(userInfo);
    }

    service.showData = function () {
      console.log(userInfo);
      return userInfo;
    }

  }


})();
