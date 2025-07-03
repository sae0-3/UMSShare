<?php

namespace App\Repositories\Academic;

use App\Models\Subject;

class SubjectRepository
{
    public function __construct(private Subject $model) {}

    public function getAllWithCareersAndLevels(int $perPage)
    {
        return $this->model
            ->with(['careers'])
            ->orderBy('name')
            ->paginate($perPage)
            ->withQueryString();
    }
}
