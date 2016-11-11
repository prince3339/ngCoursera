(function() {
  'use strict';
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ["MenuSearchService"];
    function NarrowItDownController (MenuSearchService) {
        var ctrl = this;
        ctrl.searchItem = "";

        ctrl.narrowDown = function (search) {
            var promise = MenuSearchService.getMatchedMenuItems(search);
            promise.then(function (result) {
              ctrl.showFoundItems = result;
            })
        }
    }

    MenuSearchService.$inject = ["$http"];
    function MenuSearchService ($http) {
      var service = this;

      service.getMatchedMenuItems = function (searchItem) {
        return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json"

          }).then(function(response) {
              var menuItems = response.data;
              var count = 0;
              console.log(menuItems.menu_items);
              var foundItems = [];
              if(searchItem === undefined || searchItem == "") {
                var notFoundCheck = true;
              }else{
                for(var i=0; i<=menuItems.menu_items.length; i++) {
                  if(menuItems.menu_items[i]) {
                    var description = menuItems.menu_items[i].description.toLowerCase();
                    if(description.indexOf(searchItem.toLowerCase()) !==-1) {
                        console.log("Found");
                        foundItems.push(menuItems.menu_items[i]);
                    }
                  }
                }
                console.log(foundItems);
                return foundItems;
              }
          }).catch(function (error) {
              console.log(error);
        })

      }

    }
})()
