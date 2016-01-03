<?php

//Define Dingo Router
$api = app('Dingo\Api\Routing\Router');

$api->version('v1',["namespace" => "Restaurant\Api\V1\Controllers" ], function ($api) {

	$api->group(['prefix' => 'auth'], function ($api) {
		//Authentication Routes
		$api->post('authenticate', ['as' => 'auth.authenticate', 'uses' => 'AuthController@authenticate']);
		$api->get('user', ['as' => 'user.authenticated', 'uses' => 'AuthController@getAuthenticatedUser']);
		//Registration Routes
		$api->post('register', ['as' => 'auth.register', 'uses' => 'AuthController@postRegister']);
  });

	//Resource for users
	$api->resource('user', 'UserController');

	//Resource for restaurants
	$api->resource('restaurant', 'RestaurantController');

	//Resource for categories
	$api->resource('category', 'CategoryController');

	//Resource for items
	$api->resource('category.item', 'ItemController');

	//Resource for orders
	$api->resource('orders', 'OrderController');

	// Quick and Manual tests

	// $api->get('newUser', function(){
	// 		$user = new Restaurant\Api\V1\Models\User;
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
