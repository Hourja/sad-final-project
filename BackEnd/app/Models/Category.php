<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;


    public function cities()
    {
        return $this->belongsToMany(City::class);
    }

    public function topics()
    {
        return $this->belongsToMany(Topic::class);
    }


}
