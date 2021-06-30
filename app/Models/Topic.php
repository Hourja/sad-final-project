<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;


    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function phrases()
    {
        return $this->hasMany(Phrase::class);
    }
}
