<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;


    public function category()
    {
        return $this->belongsToMany(Category::class);
    }

    public function phrase()
    {
        return $this->hasMany(Phrase::class);
    }
}
