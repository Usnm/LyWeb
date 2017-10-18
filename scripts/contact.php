<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	if(!empty($_POST['contact_name']) && !empty($_POST['contact_email']) && !empty($_POST['contact_message'])) {
		$to = 'LyWeb@gmail.com'; // Replace with your email : DO!
		$body = "Nom: {$_POST['contact_name']}\n\nEmail: {$_POST['contact_email']}\n\nNumero de telephone: {$_POST['contact_phone']}\n\nMessage: {$_POST['contact_message']}";
		mail($to, "Prise de contact LyWeb.fr", $body, "De: {$_POST['contact_email']}");
	}
}
?>