(function() {
  'use strict';
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ["MenuSearchService"];
    function NarrowItDownController (MenuSearchService) {
      var ctrl = this;
      ctrl.searchItem = "";
      var promise = MenuSearchService.getEniterMenuItems();
      promise.then(function(response) {
          ctrl.menuItems = response.data;
          console.log(ctrl.menuItems.menu_items);
          for(var i=0; i<=ctrl.menuItems.menu_items.length; i++) {
            if(ctrl.menuItems.menu_items[i]) {
              var description = ctrl.menuItems.menu_items[i].description;
              if(description == "chicken broth with egg drop") {
                  console.log("Found");
              }
            }
          }
        //  console.log(ctrl.menuItems.description);
      }).catch(function (error) {
          console.log(error);
      })
    }

    MenuSearchService.$inject = ["$http"];
    function MenuSearchService ($http) {
      var service = this;

      service.getEniterMenuItems = function () {
        var response = $http({
          method: "GET",
          url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        });

        return response;
      }

    }
})()
