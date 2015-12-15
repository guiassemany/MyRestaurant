<?php

namespace Restaurant\Api\V1;

Use Restaurant\Models\Category;

//use Illuminate\Http\Request;
use Dingo\Api\Http\Request;

class CategoryController extends BaseController
{

	public function __construct()
	{
		$this->middleware('api.auth');
		//$this->middleware('jwt.refresh');
	}

    public function index()
    {
    	return Category::all();
    }

    public function store(Request $request)
    {
    	$categoria = Category::create($request->all());
    	return $this->success('Categoria Criado');
    }

    public function show($id)
    {
    	$categoria = Category::findOrFail($id);
 			return $categoria;
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
