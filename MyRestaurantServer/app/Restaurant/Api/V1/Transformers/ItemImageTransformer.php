<?php

namespace Restaurant\Api\V1\Transformers;

use League\Fractal\TransformerAbstract;
use Restaurant\Api\V1\Models\ItemImage;

class ItemImageTransformer extends TransformerAbstract
{

    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(ItemImage $itemImage)
    {
        return [
            'id'        => (int) $itemImage->id,
            'item_id'   => (int) $itemImage->item_id,
            'image'     => $itemImage->image,
            'featured'  => (bool) $itemImage->featured == 1 ? true : false
        ];
    }

}
