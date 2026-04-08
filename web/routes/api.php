<?php

use Illuminate\Support\Facades\Route;
use App\Models\Clubs;
use App\Models\ViewPosts;

// GET /api/clubs
Route::get('/clubs', function () {
    return Clubs::select('id', 'name', 'description', 'category', 'image_url', 'member_count')
        ->get();
});

// GET /api/clubs/{id}
Route::get('/clubs/{id}', function ($id) {
    return Clubs::findOrFail($id);
});

// GET /api/posts
Route::get('/posts', function () {
    return ViewPosts::with('club:id,name,image_url')
        ->select('id', 'club_id', 'title', 'description', 'event_date', 'location', 'is_upcoming', 'created_at')
        ->latest()
        ->get();
});







