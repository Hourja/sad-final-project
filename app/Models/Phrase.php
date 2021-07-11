<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Phrase extends Model
{
    use HasFactory;


    protected $fillable = [
        'topic',
        'language_id',
        'translations'
    ];

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function translations()
    {
        return $this->hasMany(Translation::class);
    }
}
