<?php

namespace Restaurant\Api\V1;

use Restaurant\Models\Item;

use Dingo\Api\Http\Request;

class ItemController extends BaseController
{

		public function __construct()
		{
			$this->middleware('api.auth');
			//$this->middleware('jwt.refresh');
		}

    public function index()
    {
    	return Item::all();
    }

    public function store(Request $request)
    {
    	$categoria = Item::create($request->all());
    	return $this->success('Item Criado');
    }

    public function show($id)
    {
    	$categoria = Item::findOrFail($id);
 			return $categoria;
    }

    public function update(Request $request, $id)
    {
    	$categoria = Item::findOrFail($id);
    	$categoria->fill($request->all());
    	$categoria->save();
    	return $this->success('Item atualizado');
    }

    public function destroy($id)
    {
    	$categoria = Item::findOrFail($id);
    	$categoria->delete();
    	return $this->success('Item Excluído');
    }

}
