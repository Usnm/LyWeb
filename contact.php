<!DOCTYPE html>
<html lang="en">
    <?php include_once("include/head.php");?>
	<body>

        <?php include_once("include/header.php");?>

		<!-- Responsive Menu -->
		<div class="responsive-menu">
			<a href="" class="responsive-menu-close"><i class="lnr lnr-cross"></i></a>
			<nav class="responsive-nav"></nav> <!-- end .responsive-nav -->
		</div> <!-- end .responsive-menu -->

		<!-- Page title -->
		<div class="section page-title inner text-center">
			<div class="inner">
				<h3><a href="index.php">Accueil</a><i class="fa fa-angle-right" aria-hidden="true"></i><a href="contact.php">Contact</a></h3>
				<h1>Contactez-nous !</h1>
				<p>Si vous avez des questions ou un projet, <br>utilisez le formulaire ci-dessous pour contacter l'équipe LyWeb.</p>
			</div> <!-- end .inner -->
		</div> <!-- end .page-title -->

		<div class="section contact-us-section text-left">
			<div class="inner">
				<div class="map" id="map"></div>
				<div class="contact">
					<div class="container">
						<div class="row">
							<div class="col-sm-9">
								<form action="scripts/contact.php" method="post" id="contact-form" class="contact-form">
									<h2 class="dark half-border-bottom">Formulaire de contact</h2>
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group">
												<input type="text" id="contact-name" name="contact-name" placeholder="Nom" required>
											</div> <!-- end .form-group -->
											<div class="form-group">
												<input type="tel" id="contact-phone" name="contact-phone" placeholder="Numéro de telephone">
											</div> <!-- end .form-group -->
										</div> <!-- end .col-sm-6 -->
										<div class="col-sm-6">
											<div class="form-group">
												<input type="email" id="contact-email" name="contact-email" placeholder="E-mail" required>
											</div> <!-- end .form-group -->
											<div class="form-group">
												<input type="text" id="subject" name="subject" placeholder="Sujet" required>
											</div> <!-- end .form-group -->
										</div> <!-- end .col-sm-6 -->
									</div> <!-- end .row -->
									<div class="form-group textarea">
										<textarea name="contact-message" id="contact-message" required rows="4" placeholder="Votre message"></textarea>
									</div> <!-- end .form-group -->
									<div class="submit-button">
										<button type="submit" class="button" data-text="Submit"><span>Envoyer <i class="fa fa-long-arrow-right" aria-hidden="true"></i></span></button>
									</div> <!-- end .submit-button -->
									<div id="contact-loading" class="alert alert-info form-alert">
										<span class="message">Loading...</span>
									</div>
									<div id="contact-success" class="alert alert-success form-alert">
										<span class="message">Success!</span>
									</div>
									<div id="contact-error" class="alert alert-danger form-alert">
										<span class="message">Error!</span>
									</div>
								</form>
							</div> <!-- end .col-sm-9 -->
						</div> <!-- end .row -->
					</div> <!-- end .container -->					
				</div> <!-- end .contact -->
			</div> <!-- end .inner -->
		</div> <!-- end .contact-us-section -->

        <?php include_once("include/footer.php");?>

        <?php include_once("include/scripts.php");?>

	</body>
</html>