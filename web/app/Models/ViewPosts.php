<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ViewPosts extends Model
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

    public function club()  // Change from clubs() to club()
    {
        return $this->belongsTo(Clubs::class, 'club_id');  // Add 'club_id' explicitly
    }
}