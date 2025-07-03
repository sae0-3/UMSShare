<?php

namespace App\Services\Auth;

use App\Models\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class GoogleAuthService
{
    public function authenticate($code)
    {
        $response = Http::asForm()->post('https://oauth2.googleapis.com/token', [
            'code' => $code,
            'client_id' => config('services.google.client_id'),
            'client_secret' => config('services.google.client_secret'),
            'redirect_uri' => config('services.google.redirect'),
            'grant_type' => 'authorization_code',
        ]);

        if ($response->failed()) {
            throw new \Exception('Error al obtener el token de acceso de Google');
        }

        return $response->json();
    }

    public function getUserInfo(string $idToken)
    {
        $parts = explode('.', $idToken);

        if (count($parts) !== 3) {
            throw new \Exception('Formato de ID token inválido');
        }

        $payload = json_decode(base64_decode(str_replace(['-', '_'], ['+', '/'], $parts[1])), true);

        if (!$payload) {
            throw new \Exception('No se pudo decodificar el payload del ID token');
        }

        return $payload;
    }

    public function loginOrCreateUser(string $code)
    {
        return DB::transaction(function () use ($code) {
            $tokens = $this->authenticate($code);
            $userInfo = $this->getUserInfo($tokens['id_token']);

            $user = User::updateOrCreate(
                ['google_id' => $userInfo['sub']],
                [
                    'email' => $userInfo['email'],
                    'name' => $userInfo['name'],
                    'avatar_url' => $userInfo['picture'] ?? null,
                    'google_access_token' => $tokens['access_token'],
                    'google_refresh_token' => $tokens['refresh_token'],
                    'token_expires_at' => now()->addSeconds($tokens['expires_in']),
                ]
            );

            $token = $user->createToken('api-token')->plainTextToken;

            return [
                'user' => $user,
                'token' => $token,
            ];
        });
    }
}
