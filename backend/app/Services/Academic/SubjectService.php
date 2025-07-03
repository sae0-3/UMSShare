<?php

namespace App\Services\Academic;

use App\Repositories\Academic\SubjectRepository;

class SubjectService
{
    public function __construct(private SubjectRepository $repository) {}

    public function getAllSubjectsWithCareersAndLevels(int $perPage)
    {
        return $this->repository->getAllWithCareersAndLevels($perPage);
    }
}
