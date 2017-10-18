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
				<h3><a href="index.php">Accueil</a><i class="fa fa-angle-right" aria-hidden="true"></i><a href="shop.php">ProjectID</a><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Details du produit</a></h3>
				<h1>Gym<span class="orange">Weight rack</span></h1>
				<p>This is one of our newest gym weight racks. It is made from<br>very good quality and smooth materials.</p>
			</div> <!-- end .inner -->
		</div> <!-- end .page-title -->

		<div class="section product-single-section text-left">
			<div class="inner">
				<div class="container">
					<div class="row">
						<p><a href="#0" class="return-link text-left"><<  Retour</a></p>
						<div class="product-single">
							<div class="col-md-6 product-single-image">
								<!-- <div class="product-single-image"> -->
									<img src="images/product-single.jpg" alt="product-image" class="img-responsive">
								<!-- </div> --> <!-- end .product-single-image -->
							</div> <!-- end .col-md-6 -->

							<div class="clearfix visible-xs-block"></div>

							<div class="col-md-6 product-single-detail">
								<!-- <div class="product-detail"> -->
									<?php /* <p class="rating"><span><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i></span>(27 ratings)</p>*/?>
									<h1 class="small">Nom_produit</h1>
									<p class="category">Equipment</p>
									<p class="description">A stack machine also called a stack or rack has a set of massive recatangular plates that are pierced by a vertical bar which has holes drilled in it to accept a pin. Each of the plates has a channle on its underside. <br><br>
									When the pin is inserted through the channel into the hole, all of the plates above the pin rest upon it. and are lifted when the bar rises.
									</p>
									<form class="form-inline add-to-cart">
									    <input type="email" class="form-control" id="add-to-cart" placeholder="1">
										<button type="submit" class="button"><div>Ajouter à mon projet</div></button>
									</form>
								<!-- </div> --> <!-- end .product-detail -->
							</div> <!-- end .col-md-6 -->
						</div> <!-- end .product-single -->
					</div> <!-- end .row -->
					<div class="row">
						<h2 class="dark text-left half-border-bottom">Produits similaires</h2>
						<div class="products related-products product3Col text-center">
							<div class="product-sizer"></div> <!-- DO NOT REMOVE -->
							<div class="item">
								<figure>
									<div class="product-featured-img">
										<img src="images/product-grid01.jpg" alt="product" class="img-responsive">
										<i class="fa fa-plus" aria-hidden="true"></i>
									</div> <!-- end .product-featured-img -->
									<div class="product-details">
										<p class="price"><sup>$</sup>350</p>
										<h2 class="dark product-title">Gym bench</h2>
										<p class="product-type">Equipment</p>
									</div> <!-- end .product-details -->
								</figure>
							</div> <!-- end .item -->
							<div class="item ">
								<figure>
									<div class="product-featured-img">
										<img src="images/product-grid03.jpg" alt="product" class="img-responsive">
										<i class="fa fa-plus" aria-hidden="true"></i>
									</div> <!-- end .product-featured-img -->
									<div class="product-details">
										<p class="price"><sup>$</sup>170</p>
										<h2 class="dark product-title">Gym stepper</h2>
										<p class="product-type">Equipment</p>
									</div> <!-- end .product-details -->
								</figure>
							</div> <!-- end .item -->
							<div class="item">
								<figure>
									<div class="product-featured-img">
										<img src="images/product-grid04.jpg" alt="product" class="img-responsive">
										<i class="fa fa-plus" aria-hidden="true"></i>
									</div> <!-- end .product-featured-img -->
									<div class="product-details">
										<p class="price"><sup>$</sup>40</p>
										<h2 class="dark product-title">Gym dumbbell</h2>
										<p class="product-type">Equipment</p>
									</div> <!-- end .product-details -->
								</figure>
							</div> <!-- end .item -->
						</div> <!-- end .related-products -->
					</div> <!-- end .row -->					
				</div> <!-- end .container -->				
			</div> <!-- end .inner -->
		</div> <!-- end .product-single-section -->

		<?php include_once("include/join-us.php")?>

        <?php include_once("include/partners.php");?>

		<?php include_once("include/footer.php");?>
		
		<?php include_once("include/scripts.php");?>

	</body>
</html>