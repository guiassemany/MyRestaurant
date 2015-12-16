<?php

//Define Dingo Router
$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {

	$api->group(['prefix' => 'auth'], function ($api) {
		//Authentication Routes
		$api->post('authenticate', ['as' => 'auth.authenticate', 'uses' => 'Restaurant\Api\V1\AuthController@authenticate']);
		$api->get('user', ['as' => 'user.authenticated', 'uses' => 'Restaurant\Api\V1\AuthController@getAuthenticatedUser']);
		//Registration Routes
		$api->post('register', ['as' => 'auth.register', 'uses' => 'Restaurant\Api\V1\AuthController@postRegister']);
  });

	//Resource for users
	$api->resource('user', 'Restaurant\Api\V1\UserController');

	//Resource for restaurants
	$api->resource('restaurant', 'Restaurant\Api\V1\RestaurantController');

	//Resource for categories
	$api->resource('category', 'Restaurant\Api\V1\CategoryController');

	//Resource for items
	$api->resource('category.item', 'Restaurant\Api\V1\ItemController');



	// Quick and Manual tests

	// $api->get('newUser', function(){
	// 		$user = new Restaurant\Models\User;
	// 		$user->name = 'Guilherme';
	// 		$user->email = 'guilherme@assemany.com';
	// 		$user->password = bcrypt('123');
	// 		$user->save();
	// 		var_dump($user);
	// });

	// $api->get('/teste', function(){
	// 		$category = Restaurant\Models\Category::findOrFail(1);
	// 		foreach ($category->items as $key => $value) {
	// 			echo $value->title;
	// 		}
	// 		$item = Restaurant\Models\Item::findOrFail(1);
	// 		return $item->category;
	// });

});
