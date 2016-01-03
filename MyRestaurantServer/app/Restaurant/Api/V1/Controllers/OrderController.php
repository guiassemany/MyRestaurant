<?php

namespace Restaurant\Api\V1\Controllers;

use Restaurant\Api\V1\Models\Order;
use Restaurant\Api\V1\Models\OrderItem;
use Restaurant\Api\V1\Models\Item;
use Restaurant\Api\V1\Models\OrderStatus;
use Restaurant\Api\V1\Transformers\OrderTransformer;

use Dingo\Api\Http\Request;

class OrderController extends BaseController
{

		public function __construct()
		{
			//$this->middleware('api.auth');
			//$this->middleware('jwt.refresh');
		}

    public function index()
    {
			$orders = Order::all();
			return $this->response->collection($orders, new OrderTransformer);
    }

    public function store(Request $request)
    {
			$order = new Order;
			$order->user_id = 1;
			$order->order_status_id = 1;
			$order->save();

			//Get all the items
			$data = $request->input('data');
			$items = $data['items'];

			foreach ($items as $key => $value) {
				$arr[$key] = new OrderItem;
				$arr[$key]->order_id = $order->id;
				$arr[$key]->item_id = $value['id'];
				$arr[$key]->quantity = $value['quantity'];
				$arr[$key]->price = $value['price'];
				//$arr[$key]->notes = $value['notes'];
			}

			$order->orderItems()->saveMany($arr);

			return $this->success('Pedido Criado');
    }

    public function show($order_id)
    {
    	$order = Order::findOrFail($order_id);
			return $this->response->item($order, new OrderTransformer);
    }

    public function update(Request $request, $order_id)
    {
    	$order = Order::findOrFail($order_id);
    	$order->fill($request->all());
    	$order->save();
    	return $this->success('Pedido atualizado');
    }

    public function destroy($order_id)
    {
    	$order = Order::findOrFail($order_id);
    	$order->delete();
    	return $this->success('Pedido Excluído');
    }

}
