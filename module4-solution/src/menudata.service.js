(function () {
  'use strict';

  angular.module('data')
         .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService ($http, ApiBasePath) {
    var dataService = this;

    dataService.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: ApiBasePath + "/categories.json"
      });
      //console.log("Working");
      return response;
    }

    dataService.getItemsForCategory = function (categoryShortName) {
      var response = $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json",
        params: {
          category: categoryShortName
        }
      });

      return response;
    }
  }
})()
