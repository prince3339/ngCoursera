(function() {
  'use strict';
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItems);

    function foundItems() {
      var ddo = {
        templateUrl: 'remove-item.html',
        scope: {
          foundMenuItems: '<',
          onRemove: '&'
        },
        controller: DontNarrowDownController,
        controllerAs: 'ctrl',
        bindToController: true
      }
      return ddo;
    }

    function DontNarrowDownController () {
      var ctrl = this;
    }

    NarrowItDownController.$inject = ["MenuSearchService"];
    function NarrowItDownController (MenuSearchService) {
        var ctrl = this;

        ctrl.narrowDown = function (search) {
            //ctrl.searchItem = "";

            ctrl.showFoundItems = [];
            var promise = MenuSearchService.getMatchedMenuItems(search);
            ctrl.loading = true;
            promise.then(function (result) {
              ctrl.notFoundCheck = MenuSearchService.notFoundCheck;
              //console.log(ctrl.notFoundCheck);
              ctrl.showFoundItems = result;
              ctrl.loading = false;
            });
        }

        ctrl.removeItem = function (index) {
          ctrl.showFoundItems.splice(index, 1);
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
              //console.log(menuItems.menu_items);
              var foundItems = [];
              if(searchItem === undefined || searchItem == "") {
                service.notFoundCheck = true;
                //console.log(service.notFoundCheck);
              }else{
                service.notFoundCheck = false;
                for(var i=0; i<=menuItems.menu_items.length; i++) {
                  if(menuItems.menu_items[i]) {
                    var description = menuItems.menu_items[i].description.toLowerCase();

                    if(description.indexOf(searchItem.toLowerCase()) !==-1) {
                        // console.log(searchItem);
                        // console.log(searchItem.toLowerCase());
                        // console.log(description);
                        foundItems.push(menuItems.menu_items[i]);
                    }
                  }
                }
                //console.log(foundItems);
                return foundItems;
              }
          }).catch(function (error) {
              console.log(error);
        })

      }

    }
})()
