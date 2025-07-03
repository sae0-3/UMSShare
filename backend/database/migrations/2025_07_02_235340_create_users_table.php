<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->string('google_id')->unique();
            $table->string('email')->unique();
            $table->string('name');
            $table->string('avatar_url', 500)->nullable();
            $table->enum('role', ['normal', 'admin'])->default('normal');
            $table->text('google_access_token');
            $table->text('google_refresh_token');
            $table->timestampTz('token_expires_at');
            $table->timestampsTz();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
