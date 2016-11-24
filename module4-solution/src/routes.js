(function () {
  'use strict';

  angular.module('menuApp')
         .config(RoutesConfig);

  RoutesConfig.inject = ["$stateProvider", "$urlRouteProvide"];
  function RoutesConfig () {
      $urlRouterProvider.otherwise('/');

      $stateProvider
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
      })

      // Category page
      .state('categories', {
        url: '/categories ',
        templateUrl: 'src/templates/main-categories.template.html',
        controller: 'categoriesController as ctrl',
        resolve: {
          categories: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories().then(function(response) {
              return response.data;
            }).catch(function (error) {
              console.log(error);
            })
          }]
        }
      })
  }
})()
