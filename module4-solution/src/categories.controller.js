(function () {
  'use strict';

  angular.module('MenuApp')
         .controller('categoriesController', categoriesController);

  categoriesController.$inject = ["categories"];
  function categoriesController (categories) {
    var ctrl = this;
    ctrl.categoriesLists = categories;
    console.log(categories);
  }
})()
