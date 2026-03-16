<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Clubs;
use App\Models\ViewPosts;
use App\Http\Controllers\Auth\LoginController;

Route::get('/', function () {
    return inertia('Home', [
        'posts' => ViewPosts::with('club:id,name,image_url') 
            ->select('id', 'club_id', 'title', 'description', 'event_date', 'location', 'is_upcoming', 'created_at')
            ->latest()
            ->get()
    ]);
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

Route::get('login', [LoginController::class, 'create'])->name('login');

Route::post('login', [LoginController::class, 'store']);

Route::middleware('auth')->group(function () {

    // form
    Route::get('/post', function () {
        return inertia('Post', [
            'clubs' => Clubs::select('id', 'name')->get()
        ]);
    });

    // form submission
    Route::post('/post', function (Request $request) {
        $validated = $request->validate([
            'club_id' => 'required|exists:clubs,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'event_type' => 'required|string',
            'event_date' => 'required|date',
            'location' => 'required|string|max:255',
            'is_upcoming' => 'boolean',
        ]);

        ViewPosts::create($validated);

        return redirect('/')->with('success', 'Post created successfully!');
    });

    Route::post('/logout', function () {
        dd('logging out');
    });

});