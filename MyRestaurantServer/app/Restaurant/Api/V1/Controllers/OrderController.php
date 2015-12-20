<?php

namespace Restaurant\Api\V1\Controllers;

use Restaurant\Api\V1\Models\Order;
use Restaurant\Api\V1\Models\OrderItem;
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
    	$order = Order::create($request->all());
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
