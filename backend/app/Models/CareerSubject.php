<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class CareerSubject extends Pivot
{
    protected $table = 'career_subjects';

    public function career()
    {
        return $this->belongsTo(Career::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function level()
    {
        return $this->belongsTo(Level::class);
    }
}
