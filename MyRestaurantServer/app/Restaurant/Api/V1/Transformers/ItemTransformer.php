<?php

namespace Restaurant\Api\V1\Transformers;

use League\Fractal\TransformerAbstract;
use Restaurant\Api\V1\Models\Category;
use Restaurant\Api\V1\Models\Item;

class ItemTransformer extends TransformerAbstract
{
    /**
    * List of resources possible to include
    *
    * @var array
    */
    protected $defaultIncludes = [
      'images'
    ];

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
            'active'      => (bool) $item->active == 1 ? true : false,
            'deliverable' => (bool) $item->deliverable == 1 ? true : false
            //'images'      => $item->images
        ];
    }


    /**
     * Include Image
     *
     * @return League\Fractal\ItemResource
     */
    public function includeImages(Item $item)
    {
        $images = $item->images;

        return $this->collection($images, new ItemImageTransformer);
    }

}
