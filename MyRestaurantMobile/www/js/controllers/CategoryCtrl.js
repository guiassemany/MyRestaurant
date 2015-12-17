mrc.controller('CategoryCtrl', function($scope, $state, $stateParams, $ionicLoading, ItemService) {

	var vm = this;

  vm.items = [];

	vm.category_name = $stateParams.category_name;
	vm.category_id = $stateParams.category_id;

	$scope.$on('$ionicView.enter', function(e) {
			ItemService.getAllItemsByCategoryId(vm.category_id).then(function() {
		    vm.items = ItemService.data;
		  });
	});

	vm.clearSearch = function(){
		vm.searchItem = '';
	};

});
