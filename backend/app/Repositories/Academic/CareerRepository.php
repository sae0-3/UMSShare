<?php

namespace App\Repositories\Academic;

use App\Models\Career;

class CareerRepository
{
    public function __construct(private Career $model) {}

    public function getAllCareers()
    {
        return $this->model->select('id', 'name', 'color')
            ->orderBy('name')
            ->get();
    }
}
