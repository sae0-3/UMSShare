<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function careers()
    {
        return $this->belongsToMany(Career::class, 'career_subjects')
            ->using(CareerSubject::class)
            ->withPivot('level_id');
    }
}
