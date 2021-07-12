<?php

namespace App\Http\Controllers;

use App\Models\Testimonials;

class TestimonialsController extends Controller
{
    public function getTestimonials()
    {
        $testimonials = Testimonials::get();

        return $testimonials;
    }
}
