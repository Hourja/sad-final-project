<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactUsEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $full_name;
    public $email;
    public $subject;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($full_name,$email,$subject)
    {
        $this->full_name = $full_name;
        $this->email = $email;
        $this->subject = $subject;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
         return $this->from('sad@sandbox878483b94cbb41cea119a79643d2937a.mailgun.org')
                ->replyTo($this->email, $this->full_name)
                ->view('emails.contact_us');
    }
}
