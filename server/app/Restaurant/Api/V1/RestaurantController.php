<?php

namespace Restaurant\Api\V1;

Use Restaurant\Models\Restaurant;
use JWTAuth;

class RestaurantController extends BaseController
{

	public function __construct()
	{
		$this->middleware('api.auth');
	}

    public function index()
    {
    	return Restaurant::all();
    }

}