<?php

use App\Domains\Skill\Http\Controllers\SkillController;
use Illuminate\Support\Facades\Route;

Route::prefix('skill')->group(function () {
       Route::get('/', function(){
           return 'test';
       });
    Route::get('/create',[SkillController::class,'create'])->name('skill.create');
    Route::get('/index',[SkillController::class,'index'])->name('skill.index');
    Route::post('/store',[SkillController::class,'store'])->name('skill.store');
});
