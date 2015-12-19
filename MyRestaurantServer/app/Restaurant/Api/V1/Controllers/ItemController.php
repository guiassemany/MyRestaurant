<?php

namespace Restaurant\Api\V1\Controllers;

use Restaurant\Api\V1\Models\Category;
use Restaurant\Api\V1\Models\Item;
use Restaurant\Api\V1\Models\ItemImage;
use Restaurant\Api\V1\Transformers\ItemTransformer;

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
			$items = Item::with('images')
			->where('category_id', $category_id)
			->get();
			//return response()->json($category->items);
			return $this->response->collection($items, new ItemTransformer);
    }

    public function store(Request $request, $category_id)
    {
    	$item = Item::create($request->all());
    	return $this->success('Item Criado');
    }

    public function show($category_id, $item_id)
    {
    	$item = Item::findOrFail($item_id);
			return $this->response->item($item, new ItemTransformer);
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
