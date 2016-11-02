(function () {
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    function ShoppingListCheckOffService () {
      var service = this;
      service.toBuyItems = [
          {name: "cookies", quantity: 10},
          {name: "Horlicks", quantity: 2},
          {name: "Coffee", quantity: 5},
          {name: "Noodles", quantity: 50},
          {name: "Burger", quantity: 8},
      ];

      var alreadyBoughtItems = [];

      service.moveToAlreadyBought = function (index) {
          var Items = service.toBuyItems.splice(index, 1);
          var movableItems = {
            name : Items[0].name,
            quantity : Items[0].quantity
          }
          alreadyBoughtItems.push(movableItems);
          //console.log(Items[0].name);
      }

      service.showAlreadyItems = function () {
        return alreadyBoughtItems;
      }
    }

      ToBuyController.$inject = ["ShoppingListCheckOffService"];
      function ToBuyController (ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.showToBuyItems = ShoppingListCheckOffService.toBuyItems;
        toBuy.moveToAlreadyBought = function (index) {
            ShoppingListCheckOffService.moveToAlreadyBought(index);
        }
      }

      AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
      function AlreadyBoughtController (ShoppingListCheckOffService) {
        var bought = this;
        bought.showAlreadyItems = ShoppingListCheckOffService.showAlreadyItems();
      }

})()
