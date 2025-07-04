<?php

namespace App\Http\Controllers\Academic;

use App\Http\Controllers\Controller;
use App\Http\Resources\Academic\SubjectResource;
use App\Services\Academic\SubjectService;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    public function __construct(private SubjectService $service) {}

    public function index(Request $request)
    {
        $perPage = $request->query('per_page', 10);
        $paginatedSubjects = $this->service->getAllSubjectsWithCareersAndLevels($perPage);
        return SubjectResource::collection($paginatedSubjects);
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
