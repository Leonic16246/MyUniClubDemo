<?php

use Illuminate\Support\Facades\Route;
use App\Models\Clubs;

Route::get('/', function () {
    return Inertia('Home');
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
