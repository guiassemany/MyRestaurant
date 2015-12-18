<?php

namespace Restaurant\Api\V1\Transformers;

use League\Fractal\TransformerAbstract;
use Restaurant\Api\V1\Models\Category;
use Restaurant\Api\V1\Models\Item;

class ItemTransformer extends TransformerAbstract
{

    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Item $item)
    {
        return [
            'id'          => (int) $item->id,
            'category'    => $item->category->title,
            'title'       => $item->title,
            'description' => $item->description,
            'price'       => (float) $item->price,
            'image'       => $item->image,
            'active'      => (bool) $item->active == 1 ? true : false,
            'deliverable' => (bool) $item->deliverable == 1 ? true : false
        ];
    }

}
