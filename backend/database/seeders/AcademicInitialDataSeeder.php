<?php

namespace Database\Seeders;

use App\Models\Career;
use App\Models\Level;
use App\Models\Subject;
use Illuminate\Database\Seeder;

class AcademicInitialDataSeeder extends Seeder
{
    public function run(): void
    {
        Level::insert([
            ['name' => 'A', 'color' => '#FF5733'],
            ['name' => 'B', 'color' => '#33FF57'],
            ['name' => 'C', 'color' => '#3357FF'],
            ['name' => 'D', 'color' => '#FF33A1'],
            ['name' => 'E', 'color' => '#A133FF'],
            ['name' => 'F', 'color' => '#33FFF5'],
            ['name' => 'G', 'color' => '#F5FF33'],
            ['name' => 'H', 'color' => '#FF8C33'],
            ['name' => 'I', 'color' => '#8CFF33'],
            ['name' => 'J', 'color' => '#338CFF'],
        ]);

        Career::insert([
            ['name' => 'Ing. Informática', 'color' => '#a743ef'],
            ['name' => 'Ing. de Sistemas', 'color' => '#ef43b6'],
        ]);

        Subject::insert([
            ['name' => 'Algebra I'],
            ['name' => 'Cálculo I'],
            ['name' => 'Introducción a la programación'],
            ['name' => 'Fisica General'],
            ['name' => 'Algebra II'],
            ['name' => 'Cálculo II'],
            ['name' => 'Elementos de Programación y Estructuras de Datos'],
            ['name' => 'Taller de Sistemas Operativos'],
            ['name' => 'Base de Datos I'],
            ['name' => 'Base de Datos II'],
            ['name' => 'Redes de Computadoras'],
            ['name' => 'Inteligencia Artificial I / Inteligencia Artificial'],
            ['name' => 'Programación'],
            ['name' => 'Programación Funcional'],
            ['name' => 'Programación Web'],
        ]);
    }
}
