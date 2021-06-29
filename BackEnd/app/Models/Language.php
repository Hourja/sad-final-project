<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    public function city()
    {

        return $this->hasMany(City::class);
    }


    public function translation()
    {

        return $this->hasMany(Translation::class);
    }
}
