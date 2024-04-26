<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Recipient Email Address
    $to = "prodipto2004@gmail.com";

    // Email Subject
    $subject = "New Contact Form Submission";

    // Email Body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Send Email
    if (mail($to, $subject, $body)) {
        echo "Thank you for your message! We will get back to you soon.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // Redirect back to the contact form if accessed directly
    header("Location: index.html");
    exit;
}
?>
