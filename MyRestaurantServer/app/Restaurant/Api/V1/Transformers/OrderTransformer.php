<?php

namespace Restaurant\Api\V1\Transformers;

use League\Fractal\TransformerAbstract;
use Restaurant\Api\V1\Models\Order;

class OrderTransformer extends TransformerAbstract
{

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'items'
    ];



    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Order $order)
    {
        return [
            'id'            => (int) $order->id,
            'user_id'       => $order->user_id,
            'user_name'     => $order->owner->name,
            'order_status_id'     => $order->order_status_id,
            'status_tile'   => $order->status->title,
            'created_at'    => $order->created_at,
            'updated_at'    => $order->updated_at
        ];
    }

    /**
     * Include items
     *
     * @return League\Fractal\ItemResource
     */
    public function includeItems(Order $order)
    {
        $items = $order->items;

        return $this->collection($items, new ItemTransformer);
    }

}
