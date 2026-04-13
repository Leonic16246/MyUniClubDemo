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

// AUTH
Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (!Auth::attempt($credentials)) {
        return response()->json([
            'message' => 'The provided credentials do not match our records.'
        ], 401);
    }

    $user = Auth::user();
    $token = $user->createToken('mobile')->plainTextToken;

    return response()->json([
        'token' => $token,
        'user' => [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
        ]
    ]);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', function (Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    });

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});







