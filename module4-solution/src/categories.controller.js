(function () {
  'use strict';

  angular.module('data')
         .controller('categoriesController', categoriesController);

  categoriesController.$inject = ["categories"];
  function categoriesController (categories) {
    var ctrl = this;

    ctrl.categories = categories;
  }
})()
