(function () {
  "use strict";

  angular.module('public')
  .controller('signUpController', signUpController);

  signUpController.$inject = ['MenuService', 'userInfoService'];
  function signUpController(MenuService, userInfoService) {
    var $ctrl = this;
    $ctrl.success = undefined;
    $ctrl.saveInfo = function (user) {
      //console.log(MenuService.getFavMenuItems(user.menuNo));
      var test = MenuService.getFavMenuItems(user.menuNo).then(function (response) {
        user.menuInfo = response;
        //console.log(response);
        //console.log(user);
        //userInoService.saveData(user);
        if(response.status != 500) {
          userInfoService.saveData(user);
          $ctrl.error = false;
          $ctrl.success = true;
        }

        if(response.status == 500) {
          $ctrl.success = false;
          $ctrl.error = true;
          console.log('ERROR');
        }
      })
      //console.log(test);
      //userInoService.saveInfo(user)
    }
  }


})();
