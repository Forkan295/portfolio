<?php

namespace App\Domains\Skill\Repositories;

use App\Domains\Skill\Models\Skill;
use App\Services\ImageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillRepository
{
    public object $model;

    public function __construct(Skill $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        return Inertia::render('Skill/Index',[
            'data'=>$this->model->getAll()
        ]);
    }

    public function store(Request $request): JsonResponse
    {

        $logo = $request->logo ? ImageService::saveImage($request->logo, 'skill') : 'skill/default.png';
        $this->model->create([
            'name' => $request->name,
            'logo' => $logo,
            'experience' => $request->experience,
            'type' => $request->type,
        ]);
        return response()->json('success');
    }

    public function create()
    {
        return Inertia::render('Skill/Create');
    }


}
