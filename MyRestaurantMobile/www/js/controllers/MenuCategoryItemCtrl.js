mrc.controller('MenuCategoryItemCtrl', function($scope) {
	
	var vm = this;

	vm.items = [
		{
			title: "Food 1",
			shortDescription: "Bla bla bla"
		},
		{
			title: "Food 2",
			shortDescription: "Bla bla bla"
		},
		{
			title: "Food 3",
			shortDescription: "Bla bla bla"
		}
	];

	vm.clearSearch = function(){
		vm.searchItem = '';
	}
});