<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, HasUuids, Notifiable;

    protected $fillable = [
        'google_id',
        'email',
        'name',
        'avatar_url',
        'role',
        'google_access_token',
        'google_refresh_token',
        'token_expires_at',
    ];

    protected $hidden = [
        'google_access_token',
        'google_refresh_token',
    ];

    public function hasValidAccessToken(): bool
    {
        return $this->token_expires_at?->isFuture() ?? false;
    }

    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    protected function casts(): array
    {
        return [
            'token_expires_at' => 'datetime',
        ];
    }
}
