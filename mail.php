<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$business = $_POST['business'];
$priority = $_POST['projekttype'];
$prisMin = $_POST['pris-min'];
$prisMax = $_POST['pris-max'];
$besked = $_POST['besked'];
$formcontent=" Fra: $name \n Tlf.: $phone \n E-mail: $email \n Virksomhed: $business \n Projekttype: $projekttype \n Pris estimat: $prisMin - $prisMax \n Beskrivelse: $besked";
$recipient = "alexander@menzel.dk";
$subject = "hybl.dk prisestimat";
$mailheader = "Fra: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Du hører fra os meget snart!";
?>