<?php

use App\Http\Controllers\Academic\CareerController;
use App\Http\Controllers\Academic\SubjectController;
use Illuminate\Support\Facades\Route;

Route::get('/careers', [CareerController::class, 'index']);
Route::post('/careers', [CareerController::class, 'store']);
Route::get('/careers/{id}', [CareerController::class, 'show']);
Route::patch('/careers/{id}', [CareerController::class, 'update']);
Route::delete('/careers/{id}', [CareerController::class, 'destroy']);

Route::get('/subjects', [SubjectController::class, 'index']);
