<?php

namespace App\Domains\Skill\Http\Controllers;

use App\Domains\Skill\Http\Requests\SkillRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillController extends Controller
{
    public function index()
    {
        return Inertia::render('Skill/Create');
    }

    public function create()
    {
        return Inertia::render('Skill/Create');
    }

    public function store(SkillRequest $request)
    {
        dd($request->all());
    }
}
