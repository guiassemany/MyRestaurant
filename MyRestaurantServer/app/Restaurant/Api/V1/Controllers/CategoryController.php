<?php

namespace Restaurant\Api\V1\Controllers;

use Restaurant\Api\V1\Models\Category;

use Restaurant\Api\V1\Transformers\CategoryTransformer;

use Dingo\Api\Http\Request;

class CategoryController extends BaseController
{

	public function __construct()
	{
		//$this->middleware('api.auth');
		//$this->middleware('jwt.refresh');
	}

    public function index()
    {
    	//return response()->json(Category::all());
			return $this->response->collection(Category::all(), new CategoryTransformer);
    }

    public function store(Request $request)
    {
    	$categoria = Category::create($request->all());
    	return $this->success('Categoria Criado');
    }

    public function show($id)
    {
    	$categoria = Category::findOrFail($id);
 			return response()->json($categoria);
    }

    public function update(Request $request, $id)
    {
    	$categoria = Category::findOrFail($id);
    	$categoria->fill($request->all());
    	$categoria->save();
    	return $this->success('Categoria atualizado');
    }

    public function destroy($id)
    {
    	$categoria = Category::findOrFail($id);
    	$categoria->delete();
    	return $this->success('Categoria Excluído');
    }

}
