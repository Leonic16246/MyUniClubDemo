<?php

use Illuminate\Support\Facades\Route;
use App\Models\Clubs;
use App\Models\ViewPosts;

Route::get('/', function () {
    return inertia('Home', [
        'posts' => ViewPosts::with('club:id,name,image_url')  // Change from 'clubs' to 'club'
            ->select('id', 'club_id', 'title', 'description', 'event_date', 'location', 'is_upcoming', 'created_at')
            ->latest()
            ->get()
    ]);
});

Route::get('/post', function () {
    return Inertia('Post');
});

Route::get('/clubs', function () {
    return inertia('Clubs', [
        'clubs' => Clubs::all(['id', 'name', 'description', 'category', 'image_url', 'member_count'])
    ]);
});

Route::post('/logout', function () {
    dd('logging out');
});
