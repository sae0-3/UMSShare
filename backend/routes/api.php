<?php

use App\Http\Controllers\Academic\CareerController;
use App\Http\Controllers\Academic\SubjectController;
use Illuminate\Support\Facades\Route;

Route::get('/careers', [CareerController::class, 'index']);

Route::get('/subjects', [SubjectController::class, 'index']);
