<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    public function cities()
    {

        return $this->hasMany(City::class);
    }


    public function translations()
    {

        return $this->hasMany(Translation::class);
    }
}
