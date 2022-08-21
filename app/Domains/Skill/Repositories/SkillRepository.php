<?php

namespace App\Domains\Skill\Repositories;

use App\Domains\Skill\Models\Skill;
use App\Services\ImageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SkillRepository
{
    public Object $model ;

    public function __construct(Skill $model){
        $this->model = $model;
    }

    public function store(Request $request): JsonResponse
    {
        $logo = $request->logo ? ImageService::saveImage($request->logo,'skill') : 'skill/default.png';
        $this->model->create([
            'name'=>$request->name,
            'logo'=>$logo,
            'experience'=>$request->experience,
            'type'=>$request->type,
        ]);
        return response()->json('success');
    }


}
