<?php

namespace Restaurant\Api\V1\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'items';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['category_id', 'title', 'description', 'price', 'image', 'active', 'deliverable'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

    /**
    * Relation with Category Model
    */
    public function category(){
      return $this->belongsTo(\Restaurant\Api\V1\Models\Category::class)->select(['id', 'title']);
    }


    /**
    * Relation with ItemImage Model
    */
    public function images(){
      return $this->hasMany(\Restaurant\Api\V1\Models\ItemImage::class, 'item_id', 'id')
      ->select(['id', 'item_id', 'image', 'featured'])
      ->orderBy('items_images.featured', 'desc');;
    }
}
