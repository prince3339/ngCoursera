(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
      })

      //Category page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/main-categories.template.html',
        controller: 'categoriesController as ctrl',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories().then(function (response) {
              //console.log(response.data);
              return response.data;
             }).catch(function(error) {
               console.log(error);
             })
          }]
        }
      })

      //Item page
      .state('items', {
        url: '/items/{itemCat}',
        templateUrl: 'src/templates/main-items.template.html',
        controller: 'itemsController as ctrl',
        resolve: {
          items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            var cat_name = $stateParams.itemCat;
            return MenuDataService.getItemsForCategory(cat_name).then(function (response) {
              console.log(response.data);
              return response.data;
             }).catch(function(error) {
               console.log(error);
             })
          }]
        }
      })
  }
})()
