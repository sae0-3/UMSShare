<?php

namespace App\Http\Controllers\Academic;

use App\Http\Controllers\Controller;
use App\Models\Career;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CareerController extends Controller
{
    public function index()
    {
        $careers = Career::select('id', 'name', 'color')
            ->orderBy('name')
            ->get();

        return response()->json([
            'data' => $careers,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:30|unique:careers,name',
                'color' => 'required|string|regex:/^#[0-9A-Fa-f]{6}$/|max:7',
            ]);

            $career = Career::create($validatedData);

            return response()->json([
                'data' => $career,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error creando carrera: ' . $e->getMessage(), [
                'request' => $request->all(),
            ]);

            return response()->json([
                'error' => 'Ocurió un error al crear la carrera. Por favor, inténtalo de nuevo más tarde.',
            ], 500);
        }
    }

    public function show(string $id)
    {
        $career = Career::with(['subjects'])->find($id);

        if (!$career) {
            return response()->json([
                'error' => 'Carrera no encontrada.',
            ], 404);
        }

        return response()->json([
            'data' => $career,
        ]);
    }

    public function update(Request $request, string $id)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'sometimes|required|string|max:30|unique:careers,name,' . $id,
                'color' => 'sometimes|required|string|regex:/^#[0-9A-Fa-f]{6}$/|max:7',
            ]);

            $career = Career::findOrFail($id);
            $career->update($validatedData);

            return response()->json([
                'data' => $career,
            ]);
        } catch (\Exception $e) {
            Log::error('Error actualizando carrera: ' . $e->getMessage(), [
                'request' => $request->all(),
            ]);

            return response()->json([
                'error' => 'Ocurrió un error al actualizar la carrera. Por favor, inténtalo de nuevo más tarde.',
            ], 500);
        }
    }

    public function destroy(string $id)
    {
        $career = Career::find($id);

        if (!$career) {
            return response()->json([
                'error' => 'Carrera no encontrada.',
            ], 404);
        }

        $career->delete();

        return response()->json(null, 204);
    }
}
