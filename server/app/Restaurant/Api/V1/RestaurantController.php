<?php

namespace Restaurant\Api\V1;

Use Restaurant\Models\Restaurant;

//use Illuminate\Http\Request;
use Dingo\Api\Http\Request;

class RestaurantController extends BaseController
{

	public function __construct()
	{
		$this->middleware('api.auth');
		//$this->middleware('jwt.refresh');
	}

    public function index()
    {
    	return Restaurant::all();
    }

    public function store(Request $request)
    {
    	$restaurant = Restaurant::create($request->all());
    	return $this->success('Restaurante Criado');
    	//return $this->response->created();
    }

    public function show($id)
    {
    	$restaurant = Restaurant::findOrFail($id);
 		return $restaurant;
    }

    public function update(Request $request, $id)
    {	
    	$restaurant = Restaurant::findOrFail($id);
    	$restaurant->fill($request->all());
    	$restaurant->save();
    	return $this->success('Restaurante atualizado');
    }

    public function destroy($id)
    {
    	$restaurant = Restaurant::findOrFail($id);
    	$restaurant->delete();
    	return $this->success('Restaurante Excluído');
    }

}