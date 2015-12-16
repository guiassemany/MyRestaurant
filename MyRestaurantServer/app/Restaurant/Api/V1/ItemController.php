<?php

namespace Restaurant\Api\V1;

use Restaurant\Models\Category;
use Restaurant\Models\Item;

use Dingo\Api\Http\Request;

class ItemController extends BaseController
{

		public function __construct()
		{
			//$this->middleware('api.auth');
			//$this->middleware('jwt.refresh');
		}

    public function index($category_id)
    {
			$category = Category::findOrFail($category_id);
			return response()->json($category->items);
    }

    public function store(Request $request, $category_id)
    {
    	$item = Item::create($request->all());
    	return $this->success('Item Criado');
    }

    public function show($category_id, $item_id)
    {
    	$item = Item::with('category')->findOrFail($item_id);
			return response()->json($item);
    }

    public function update(Request $request, $category_id, $item_id)
    {
    	$item = Item::findOrFail($item_id);
    	$item->fill($request->all());
    	$item->save();
    	return $this->success('Item atualizado');
    }

    public function destroy($category_id, $item_id)
    {
    	$item = Item::findOrFail($item_id);
    	$item->delete();
    	return $this->success('Item Excluído');
    }

}
