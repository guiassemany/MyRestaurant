<?php

namespace Restaurant\Api\V1\Controllers;

use Restaurant\Api\V1\Models\User;
use Dingo\Api\Http\Request;

use JWTAuth;

class UserController extends BaseController
{

	public function __construct()
	{
		$this->middleware('api.auth');
		//$this->middleware('jwt.refresh');
	}

	public function index()
	{
		return User::all();
	}

	public function store(Request $request)
	{
		$user = User::create($request->all());
		return $this->success('User Criado');
	}

	public function show($id)
	{
		$user = User::findOrFail($id);
		return $user;
	}

	public function update(Request $request, $id)
	{
		$user = User::findOrFail($id);
		$user->fill($request->all());
		$user->save();
		return $this->success('User atualizado');
	}

	public function destroy($id)
	{
		$user = User::findOrFail($id);
		$user->delete();
		return $this->success('User Excluído');
	}

}
