<?php

namespace App\Http\Resources\Academic;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'resources' => 0,
            'careers' => $this->careers->map(function ($career) {
                return [
                    'id' => $career->id,
                    'name' => $career->name,
                    'color' => $career->color,
                    'level' => [
                        'id' => $career->pivot->level_id,
                        'name' => $career->pivot->level->name,
                        'color' => $career->pivot->level->color
                    ]
                ];
            }),
        ];
    }
}
