<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'club_posts';

    protected $fillable = [
        'club_id',
        'title',
        'description',
        'event_type',
        'event_date',
        'location',
        'image_url',
        'is_upcoming'
    ];

    public function club()
    {
        return $this->belongsTo(Club::class);
    }
}