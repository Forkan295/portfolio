<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageService
{
    public static function saveImage($image, $path = 'default')
    {
        $extension = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
        $replace = substr($image, 0, strpos($image, ',') + 1);
        $image = str_replace($replace, '', $image);
        $image = str_replace(' ', '+', $image);
        $imageName = $path . '/' . Str::random(10) . '.' . $extension;
        Storage::disk('public')->put($imageName, base64_decode($image));
        return $imageName;
    }

}
