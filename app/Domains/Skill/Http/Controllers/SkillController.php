<?php

namespace App\Domains\Skill\Http\Controllers;

use App\Domains\Skill\Http\Requests\SkillRequest;
use App\Domains\Skill\Repositories\SkillRepository;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class SkillController extends Controller
{
    public function index()
    {

        return resolve(SkillRepository::class)->index();

    }

    public function create()
    {
        return resolve(SkillRepository::class)->create();
    }

    public function store(SkillRequest $request)
    {
        return resolve(SkillRepository::class)->store($request);
    }
}
