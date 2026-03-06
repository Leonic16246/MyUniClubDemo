<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia('Home');
});

Route::get('/post', function () {
    return Inertia('Post');
});

Route::get('/clubs', function () {
    return Inertia('Clubs');
});

Route::post('/logout', function () {
    dd('logging out');
});
