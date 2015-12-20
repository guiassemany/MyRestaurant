<?php

namespace Restaurant\Api\V1\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'orders';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'title', 'description', 'price', 'image', 'active', 'deliverable'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * Relation with users table - Who made the Order
     *
     *
     */
     public function owner(){
      return $this->belongsTo(\Restaurant\Api\V1\Models\User::class, 'user_id', 'id');
     }

     /**
      * Relation with status table
      *
      *
      */
      public function status() {
       return $this->belongsTo(\Restaurant\Api\V1\Models\OrderStatus::class, 'order_status_id', 'id');
      }

      /**
       * Relation with orders_items table - which items has been requeste on an order
       *
       *
       */
       public function items() {
        return $this->hasManyThrough(\Restaurant\Api\V1\Models\Item::class, \Restaurant\Api\V1\Models\OrderItem::class, 'order_id', 'id');
       }

}
