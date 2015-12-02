<?php

//Define Dingo Router
$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {

	//Authentication Routes
	$api->post('auth/authenticate', ['as' => 'auth.authenticate', 'uses' => 'Restaurant\Api\V1\AuthController@authenticate']);
	$api->get('authUser', ['as' => 'user.authenticated', 'uses' => 'Restaurant\Api\V1\AuthController@getAuthenticatedUser']);

	//Restaurant Routes
	//$api->get('/restaurants', ['as' => 'restaurants.index', 'uses' => 'Restaurant\Api\V1\RestaurantController@index']);

	//User Routes
	//$api->get('/users', ['as' => 'users.index', 'uses' => 'Restaurant\Api\V1\UserController@index']);

	$api->resource('restaurants', 'Restaurant\Api\V1\RestaurantController');

});