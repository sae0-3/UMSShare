<?php

namespace App\Http\Controllers\Academic;

use App\Http\Controllers\Controller;
use App\Http\Resources\Academic\CareerResource;
use App\Services\Academic\CareerService;
use Illuminate\Http\Request;

class CareerController extends Controller
{
    public function __construct(private CareerService $service) {}

    public function index()
    {
        $careers = $this->service->getAllCareers();
        return CareerResource::collection($careers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
