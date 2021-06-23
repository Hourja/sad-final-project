<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;


    public function city()
    {
        return $this->belongsToMany(City::class);
    }

    public function topic()
    {
        return $this->belongsToMany(Topic::class);
    }


}
