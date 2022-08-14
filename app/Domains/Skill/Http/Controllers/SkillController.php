<?php

namespace App\Domains\Skill\Http\Controllers;

use App\Http\Controllers\Controller;
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
}
