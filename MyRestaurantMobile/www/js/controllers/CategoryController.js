(function() {
    'use strict';

		angular
					.module('myrestaurant.controllers')
					.controller('CategoryController', CategoryController);

		CategoryController.$inject = ['$scope', '$state', '$stateParams', '$ionicLoading', 'ItemService'];

		function CategoryController($scope, $state, $stateParams, $ionicLoading, ItemService){
			var vm = this;

		  vm.items = [];
			vm.clearSearch = clearSearch;

			vm.category_name = $stateParams.category_name;
			vm.category_id = $stateParams.category_id;

			$scope.$on('$ionicView.enter', function(e) {
					ItemService.getAllItemsByCategoryId(vm.category_id).then(function() {
				    vm.items = ItemService.data;
				  });
			});

			function clearSearch(){
				vm.searchItem = '';
			}
		}
})();
