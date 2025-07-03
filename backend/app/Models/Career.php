<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'color',
    ];

    public function subjects()
    {
        return $this->belongsToMany(Subject::class, 'career_subjects')
            ->using(CareerSubject::class)
            ->withPivot('level_id');
    }
}
