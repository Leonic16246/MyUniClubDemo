<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('club_posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('club_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->string('event_type')->nullable(); // e.g., 'meeting', 'social', 'competition'
            $table->dateTime('event_date')->nullable();
            $table->string('location')->nullable();
            $table->string('image_url')->nullable();
            $table->boolean('is_upcoming')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('club_posts');
    }
};