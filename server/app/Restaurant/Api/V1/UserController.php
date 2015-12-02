<?php

namespace Restaurant\Api\V1;

Use Restaurant\Models\User;
use JWTAuth;

class UserController extends BaseController
{

	public function __construct()
	{
		$this->middleware('api.auth');
	}

    public function index()
    {
    	return User::all();
    }

}