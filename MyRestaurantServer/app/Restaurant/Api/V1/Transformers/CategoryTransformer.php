<?php

namespace Restaurant\Api\V1\Transformers;

use League\Fractal\TransformerAbstract;
use Restaurant\Models\Category;

class CategoryTransformer extends TransformerAbstract
{



    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Category $category)
    {
        return [
            'id'          => (int) $category->id,
            'title'       => $category->title,
            'description' => $category->description,
            'image'       => $category->image
        ];
    }

}
