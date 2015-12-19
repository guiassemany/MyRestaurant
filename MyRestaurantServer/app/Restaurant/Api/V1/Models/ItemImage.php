<?php

namespace Restaurant\Api\V1\Models;

use Illuminate\Database\Eloquent\Model;

class ItemImage extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'items_images';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['item_id', 'image', 'featured'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

    /**
    * Relation with ItemImage Model
    */
    public function item(){
      return $this->belongsTo(\Restaurant\Api\V1\Models\Item::class);
    }

    /**
    * Relation with ItemImage Model
    */
    public function scopeFiltered($query)
    {
        return $query->where('featured', '=', 1);
    }

}
