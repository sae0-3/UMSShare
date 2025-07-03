<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\Auth\GoogleAuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class GoogleAuthController extends Controller
{
    private $googleAuthService;

    public function __construct(GoogleAuthService $googleAuthService)
    {
        $this->googleAuthService = $googleAuthService;
    }

    public function __invoke(Request $request)
    {
        try {
            $request->validate([
                'code' => 'required|string',
            ]);

            $result = $this->googleAuthService->loginOrCreateUser($request->code);

            return response()->json([
                'user' => $result['user'],
                'token' => $result['token'],
            ]);
        } catch (ValidationException $e) {
            Log::error('Google Auth Validation Error', [
                'message' => $e->getMessage(),
                'errors' => $e->errors(),
            ]);

            return response()->json([
                'error' => 'Código de autenticación inválido',
            ], 422);
        } catch (\Exception $e) {
            Log::error('Google Auth General Error', [
                'message' => $e->getMessage(),
            ]);

            return response()->json([
                'error' => 'Error al autenticar con Google',
            ], 500);
        }
    }
}
