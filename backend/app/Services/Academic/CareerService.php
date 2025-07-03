<?php

namespace App\Services\Academic;

use App\Repositories\Academic\CareerRepository;

class CareerService
{
    public function __construct(private CareerRepository $repository) {}

    public function getAllCareers()
    {
        return $this->repository->getAllCareers();
    }
}
