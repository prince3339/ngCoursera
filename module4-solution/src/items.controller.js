(function () {
  'use strict';

  angular.module('data')
         .controller('itemsController', itemsController);

  itemsController.$inject = ["items"];
  function itemsController (items) {
    var ctrl = this;
    ctrl.items = items.menu_items;
    console.log(items);
  }
})()
