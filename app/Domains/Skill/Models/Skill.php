<?php

namespace App\Domains\Skill\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'logo', 'experience', 'type'];

    public function getImageAttribute()
    {
        return asset('storage/' . $this->logo);
    }

    public function getAll()
    {
        $data = $this->paginate(1);
        return collect([
            'skills' => $data->transform(function ($skill) {
                return [
                    'name' => $skill->name,
                    'image' => $skill->image,
                    'experience' => $skill->experience
                ];
            }),
            'currentPage' => $data->currentPage(),
            'hasMorePage' => $data->hasMorePages(),
            'path' => $data->path()
        ]);

    }
}
