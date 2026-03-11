<?php
use Illuminate\Http\Request;
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

Route::get('/clubs', function (Request $request) {
    $search = $request->input('search', '');
    
    $clubs = Clubs::query()
        ->when($search, function ($query, $search) {
            $query->where('name', 'ilike', "%{$search}%")
                  ->orWhere('description', 'ilike', "%{$search}%")
                  ->orWhere('category', 'ilike', "%{$search}%");
        })
        ->select('id', 'name', 'description', 'category', 'image_url', 'member_count')
        ->get();
    
    return inertia('Clubs', [
        'clubs' => $clubs,
        'search' => $search
    ]);
});

Route::post('/logout', function () {
    dd('logging out');
});
