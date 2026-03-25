<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClubSeeder extends Seeder
{
    public function run(): void
    {
        $clubs = [
            [
                'name' => 'Computer Science Club',
                'description' => 'Learn coding, build projects, and connect with tech enthusiasts.',
                'category' => 'Technology',
                'image_url' => 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=256&h=256&fit=crop',
                'member_count' => 156,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Photography Society',
                'description' => 'Capture moments, improve your skills, and explore creative photography.',
                'category' => 'Arts',
                'image_url' => 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=256&h=256&fit=crop',
                'member_count' => 89,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Debate Club',
                'description' => 'Sharpen your argumentation skills and engage in intellectual discussions.',
                'category' => 'Academic',
                'image_url' => 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=256&h=256&fit=crop',
                'member_count' => 67,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('clubs')->insert($clubs);

        // Add some posts
        $posts = [
            [
                'club_id' => 1,
                'title' => 'Hackathon 2024',
                'description' => 'Join us for 48 hours of coding, innovation, and prizes!',
                'event_type' => 'competition',
                'event_date' => now()->addDays(14),
                'location' => 'Tech Building Room 301',
                'is_upcoming' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'club_id' => 2,
                'title' => 'Campus Photo Walk',
                'description' => 'Explore campus beauty through your lens. All skill levels welcome.',
                'event_type' => 'social',
                'event_date' => now()->addDays(7),
                'location' => 'Main Quad',
                'is_upcoming' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'club_id' => 3,
                'title' => 'Weekly Debate Session',
                'description' => 'This week\'s topic: Should AI replace human decision-making?',
                'event_type' => 'meeting',
                'event_date' => now()->addDays(3),
                'location' => 'Student Union Hall',
                'is_upcoming' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('club_posts')->insert($posts);
    }
}