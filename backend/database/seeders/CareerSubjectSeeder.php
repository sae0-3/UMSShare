<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CareerSubjectSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('career_subjects')->insert([
            [
                'career_id' => 1,
                'subject_id' => 1,
                'level_id' => 1,
            ],
            [
                'career_id' => 1,
                'subject_id' => 2,
                'level_id' => 1,
            ],
            [
                'career_id' => 1,
                'subject_id' => 3,
                'level_id' => 1,
            ],
            [
                'career_id' => 1,
                'subject_id' => 4,
                'level_id' => 1,
            ],
            [
                'career_id' => 1,
                'subject_id' => 5,
                'level_id' => 2,
            ],
            [
                'career_id' => 1,
                'subject_id' => 6,
                'level_id' => 2,
            ],
            [
                'career_id' => 1,
                'subject_id' => 7,
                'level_id' => 2,
            ],
            [
                'career_id' => 1,
                'subject_id' => 8,
                'level_id' => 5,
            ],
            [
                'career_id' => 1,
                'subject_id' => 9,
                'level_id' => 4,
            ],
            [
                'career_id' => 1,
                'subject_id' => 10,
                'level_id' => 5,
            ],
            [
                'career_id' => 1,
                'subject_id' => 11,
                'level_id' => 6,
            ],
            [
                'career_id' => 1,
                'subject_id' => 12,
                'level_id' => 5,
            ],
            [
                'career_id' => 1,
                'subject_id' => 13,
                'level_id' => 2,
            ],
            [
                'career_id' => 1,
                'subject_id' => 14,
                'level_id' => 4,
            ],
            [
                'career_id' => 1,
                'subject_id' => 15,
                'level_id' => 6,
            ],


            [
                'career_id' => 2,
                'subject_id' => 1,
                'level_id' => 1,
            ],
            [
                'career_id' => 2,
                'subject_id' => 2,
                'level_id' => 1,
            ],
            [
                'career_id' => 2,
                'subject_id' => 3,
                'level_id' => 1,
            ],
            [
                'career_id' => 2,
                'subject_id' => 4,
                'level_id' => 1,
            ],
            [
                'career_id' => 2,
                'subject_id' => 5,
                'level_id' => 2,
            ],
            [
                'career_id' => 2,
                'subject_id' => 6,
                'level_id' => 2,
            ],
            [
                'career_id' => 2,
                'subject_id' => 7,
                'level_id' => 2,
            ],
            [
                'career_id' => 2,
                'subject_id' => 8,
                'level_id' => 4,
            ],
            [
                'career_id' => 2,
                'subject_id' => 9,
                'level_id' => 3,
            ],
            [
                'career_id' => 2,
                'subject_id' => 10,
                'level_id' => 4,
            ],
            [
                'career_id' => 2,
                'subject_id' => 11,
                'level_id' => 6,
            ],
            [
                'career_id' => 2,
                'subject_id' => 12,
                'level_id' => 6,
            ],
        ]);
    }
}
