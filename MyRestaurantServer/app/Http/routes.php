<?php

//Define Dingo Router
$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {

	//Authentication Routes
	$api->post('auth/authenticate', ['as' => 'auth.authenticate', 'uses' => 'Restaurant\Api\V1\AuthController@authenticate']);
	$api->get('auth/user', ['as' => 'user.authenticated', 'uses' => 'Restaurant\Api\V1\AuthController@getAuthenticatedUser']);

	//Registration Routes
	$api->post('auth/register', ['as' => 'auth.register', 'uses' => 'Restaurant\Api\V1\AuthController@postRegister']);


	$api->resource('restaurants', 'Restaurant\Api\V1\RestaurantController');

});