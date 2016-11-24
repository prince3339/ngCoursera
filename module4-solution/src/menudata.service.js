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
        url: getCatApiBase + "/categories.json"
      });

      return response;
    }

    dataService.getItemsForCategory = function (categoryShortName) {
      var response = $http({
        method: "GET",
        url: ApiBasePath + "/",
        params: {
          category: categoryShortName
        }
      });

      return response;
    }
  }
})()
