<?php

namespace Restaurant\Api\V1\Models;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'restaurants';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'address', 'about'];

}
