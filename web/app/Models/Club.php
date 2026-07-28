<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
