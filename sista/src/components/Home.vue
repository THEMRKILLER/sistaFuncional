<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans|Raleway|Candal);

body {
	font-family: 'Open Sans', sans-serif;
	line-height: 20px;
	font-size: 300;
	font-size: 16px;
}

td.fc-day.fc-past {
    background-color: #EEEEEE;
}
.IndicadorRojo{
    color: #D0021B;
}
.IndicadorVerde{
    color: #4A90E2;
}
.IndicadorAmarillo{
    color: #FAEBCC;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.tbserv{
    font-family: 'Segoe UI';    
    color: #000000;
    font-size: 300;
    font-size: 16px;
}
h1, h2, h3, h4, h5, h6
{
	font-family: 'Raleway', sans-serif;
	font-weight: 600;
}
a, a:hover, a:focus, a:active{
    outline: none;
}

.section-padding{
	padding: 60px 0px;

}
h2 {
    line-height: 20px;
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
}
hr.botm-line {
    height: 3px;
    width: 60px;
    background: #ffb737;
    position: relative;
    border: 0;
    margin: 20px 0 20px 0;
}

/***************************************
banner
***************************************/
.navbar {
    margin-bottom: 0px;
    border: 0px;
}
.navbar {
    border-radius: 0px;
}
.navbar-default {
    background-color: #fff;
    padding: 20px 0;
    transition: all 0.3s;
}
.navbar-default {
    background-color: transparent;
    border: 0px;
}
.navbar {
    border-radius: 0px;
}

.navbar-brand
{
	font-family: 'Chewy', cursive;
	font-size: 32px;
}

.navbar-brand img {
    padding-top: 2px;
    width: 120px !important;
}

.navbar-default .navbar-brand, .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {
    color: #EA6045;
}

.top-nav-collapse {
    padding: 0; 
    background: rgba(28,74,90, 0.9);
}

.white, .white:hover, .white:focus
{
	color: #fff;
	width: 100% !important;
}
.block
{
	display: block;
}
.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active > a:hover {
    color: #fff;
    text-transform: uppercase;
    background-color: rgba(12, 184, 182, 0.21);
}
.navbar-default .navbar-nav > li > a
{
	color: #fff;
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 300;
}
.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus
{
	color: #fff;
    text-transform: uppercase;
    background-color: rgba(12, 184, 182, 0.21);
}
.affix {
    background-color: #ffffff !important;
}
.affix .navbar-nav > li > a:hover, .affix .navbar-nav > li > a:focus
{
    background-color: rgba(12, 184, 182) !important;
}
#banner{
	background: url('../assets/img/bg-banner.jpg') no-repeat fixed;
	background-size: cover;
	min-height: 650px;
	position: relative;
}
.bg-color{
	background-color: RGBA(13, 70, 83, 0.78);
	min-height: 670px;
}
.banner-info{
	padding-top: 190px;
}
.banner-logo img{
	display: inline-block;
}
.banner-text{
	color: #fff;
}
.banner-text h1{
	font-family: 'Candal', sans-serif;
	font-size: 35px;
	text-transform: uppercase;
	padding-bottom:15px; 
}
.btn-appoint, .btn-appoint:hover, .btn-appoint:focus{
	margin-top: 30px;
	padding: 10px 20px;
	font-size: 12px;
	background-color: rgba(12, 184, 182, 0.91);
	border-radius: 3px;
	color: #fff;
}
.overlay-detail a i {
    text-align: center;
    position: absolute;
    bottom: 25px;
    font-size: 38px;
    color: #fff;
    margin: 0 auto;
}
.text-primary i{
    padding-top: 8px;
    display: inline-block;
}
/***************************************
services
***************************************/
.icon i{
	color: #0cb8b6;
	font-size: 45px;
	margin-bottom: 25px;
}
.service-info{
	margin-bottom: 20px;
}
.icon-info h4{
	padding-bottom: 15px;
}
.icon-info p{
	font-size: 15px !important;
}
/***************************************
cta-1
***************************************/
.schedule-tab {
	background-color: #0CB8B6;
	float: left;
}
.medi-info{
	border-right: 1px solid #fff;
}
.medi-info, .time-info{
	padding: 20px;
	color: #fff;
}
.medi-info h3, .time-info h3{
	padding-bottom: 16px;
	color: #fff;
	font-weight: 600;
}
.medi-info-btn, .medi-info-btn:hover, .medi-info-btn:focus {
    margin: 15px 0px 5px;
    display: inline-block;
    border: solid white 2px;
    padding: 3px 8px;
    font-size: 12px;
    color: #fff;
    font-weight: 400 !important;
    cursor: pointer;
}
td {
    border: 0px solid #ededed;
    border-top: 1px solid rgba(216, 216, 216, 0.5);
    padding: 6px 10px 6px 0;
}
.medi-info, .time-info{
    font-size: 14px;
}
/***************************************
about
***************************************/
#about{
    background-color: rgba(238, 238, 238, 0.15);
}
.lg-line{
	line-height: 1.4;
	font-size: 28px;
}
.more-features-box-text-icon {
    float: left;
    width: 40px;
    height: 40px;
    padding-top: 6px;
    background: #0cb8b6;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    color: #fff;
    text-align: center;
}
.more-features-box-text-description h3{
    padding-bottom: 15px;
}
.more-features-box-text-icon i {
    font-size: 18px;
    line-height: 26px;
}
.more-features-box-text-description{
	margin-left: 80px;
	margin-bottom: 35px;
}
.sec-para{
	padding-bottom: 10px;
}
/***************************************
doctor team
***************************************/
.thumbnail {
	border-radius: 0px;
}
.caption h3{
    padding-bottom: 5px;
}
.caption p{
    padding-bottom: 10px;
}
/***************************************
testimonial
***************************************/
#testimonial{
    background-color: #eee;
}
.testi-details {
    background: #fff;
    padding: 14px 24px;
    margin-bottom: 20px;
    box-shadow: 3px 3px 2px 0px rgba(0,0,0,0.18);
    position: relative;
}
.testi-info a {
    display: block;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
}
.testi-info a img{
	border-radius: 50%;
}
.testi-info h3 {
    display: inline-block;
    line-height: 22px;
    font-weight: 600;
    color: #000;
    margin-top: 8px;
}
.testi-info h3 > span {
    display: block;
    line-height: 16px;
    font-weight: 400;
}
.testi-details::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    border-left: 0;
    bottom: -40px;
    left: 56px;
    border-top-color: #fff;
    border-width: 20px;
}
.testi-details::before {
    content: '';
    position: absolute;
    transform: rotate(45deg);
    width: 0px;
    height: 0px;
    bottom: -30px;
    left: 45px;
    border-style: solid;
    border-width: 15px;
    border-color: transparent;
    z-index: -1;
    box-shadow: 3px -13px 5px 0px rgba(0, 0, 0, 0.18);
    border-left: 0;
}
/***************************************
cta -2
***************************************/
#cta-2{
	background-color: rgb(41, 48, 46);
}
.white{
	color: #fff;
}
.icon-play, .icon-play:hover, .icon-play:focus{
	background-color: #0CB8B6;
	padding: 5px 10px;
	color: #fff;
	text-decoration: none;
	padding: 5px 17px;
	margin-top: 26px;
	display: block;
}
.text-primary {
    color: #0cb8b6;
}
.icon-mar 
{
	margin-right: 7px;
}
/***************************************
contact us
***************************************/
.space {
    margin-top: 40px;
}
.btn-form, .btn-form:hover, .btn-form:focus {
    background-color: #0cb8b6;
    color: #fff;
    border-radius: 0px;
    padding: 10px 20px;
}
.br-radius-zero {
    border-radius: 0px;
}
.form-control{
	height: 40px;
}

.validation {
    color: red;
    display:none;
    margin: 0 0 20px;
    font-weight:400;
    font-size:13px;
}

#sendmessage {
    color: green;
    border:1px solid green;
    display:none;
    text-align:center;
    padding:15px;
    font-weight:600;
    margin-bottom:15px;
}

#errormessage {
    color: red;
    display:none;
    border:1px solid red;
    text-align:center;
    padding:15px;
    font-weight:600;
    margin-bottom:15px;
}

#sendmessage.show, #errormessage.show, .show {
	display:block;
}


/***************************************
footer
***************************************/
#footer{
	background-color: #325C6A;
}
.ftr-tle {
    height: 50px;
}
.info-sec {
    color: #fff;
}
.quick-info li i {
    font-size: 8px;
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: left;
}
.social-icon li {
    float: left;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-right: 5px;
}
.bglight-blue {
    background-color: #3498DB;
}
.bgred {
    background-color: #E74C3C;
}
.bgdark-blue {
    background-color: #2C3E50;
}
.bglight-blue {
    background-color: #3498DB;
}
.top-footer {
    padding: 40px 0px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.footer-line {
    padding: 30px 0px;
    color: #fff;
}

.footer-line a {
    color: #0CB8B6;
}

.quick-info li a{
    color: #fff;
}
.site-link, .site-link:hover, .site-link:focus
{
    color: #0cb8b6;
    text-transform: none;
}
@media (min-width: 551px) and (max-width: 980px){

}
@media (min-width: 220px) and (max-width: 551px){
    .testi-info{
        margin-bottom: 20px;
    }
    .marb20{
        margin-top: 30px;
    }
    h2{
        font-size: 24px;
        line-height: 1.2;
    }
    .section-title{
        margin-bottom: 30px;
    }
    .medi-info {
    border: 0px;
    border-bottom: 1px solid #fff;
    }
    .service-info{
        margin-top: 20px;
        margin-bottom: 0px;
    }
    .caption h3 {
    font-size: 14px;
    }
    .caption p{
    font-size: 12px;
    padding-bottom: 5px;
    }
    .caption ul li a i{
        font-size: 14px;
    }
    .banner-text h1{
        font-size: 24px;
    }
    
}
</style>
<template>	
	<div>

		<!--BANNER PROPIO-->
		<nav class="navbar navbar-default navbar-fixed-top">
  			<div class="container">
    
  			</div>
		</nav>
		<!--BANNER PROPIO FIN-->


		<!--banner-->
	<section id="banner" class="banner">

		<div class="bg-color">
			<nav class="navbar navbar-default navbar-fixed-top">
			  <div class="container">
			  	<div class="col-md-12">
				    <div class="navbar-header">
				      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				      </button>
				      <a class="navbar-brand" href="#"><img src="../assets/img/logo.png" class="img-responsive" style="width: 140px; margin-top: -16px;"></a>
				    </div>
				    <div class="collapse navbar-collapse navbar-right" id="myNavbar">
				      <ul class="nav navbar-nav">
				        <li class="active"><a href="#banner">Home</a></li>
				        <li class=""><a href="#service">Services</a></li>
				        <li class=""><a href="#about">About</a></li>
				        <li class=""><a href="#testimonial">Testimonial</a></li>
				        <li class=""><a href="#citas">Agendar Cita</a></li>
				      </ul>
				    </div>
				</div>
			  </div>
			</nav>
			<div class="container">			
				<div class="row">
					<div class="banner-info">
						<div class="banner-logo text-center">
							<img src="../assets/img/logo.png" class="img-responsive" style="width: 200px; ">
						</div>
						<div class="banner-text text-center">
							<h1 class="white">Healthcare at your desk!!</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br>tempor incididunt ut labore et dolore magna aliqua.</p>
							<a href="#citas" class="btn btn-appoint">Make an Appointment.</a>
						</div>
						<div class="overlay-detail text-center">
			               <a href="#service"><i class="fa fa-angle-down"></i></a>
			             </div>		
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--/ banner-->




	<!--service-->
	<section id="service" class="section-padding" STYLE="background-color:#FFFFFF">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-sm-4">
					<h2 class="ser-title">Our Service</h2>
					<hr class="botm-line">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris cillum.</p>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="service-info">
						<div class="icon">
							<i class="fa fa-stethoscope"></i>
						</div>
						<div class="icon-info">
							<h4>24 Hour Support</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
					<div class="service-info">
						<div class="icon">
							<i class="fa fa-ambulance"></i>
						</div>
						<div class="icon-info">
							<h4>Emergency Services</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="service-info">
						<div class="icon">
							<i class="fa fa-user-md"></i>
						</div>
						<div class="icon-info">
							<h4>Medical Counseling</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
					<div class="service-info">
						<div class="icon">
							<i class="fa fa-medkit"></i>
						</div>
						<div class="icon-info">
							<h4>Premium Healthcare</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--/ service-->
	<!--cta-->
	<section id="cta-1" class="section-padding">
		<div class="container">
			<div class="row">
				<div class="schedule-tab">
    			<div class="col-md-4 col-sm-4 bor-left">
    				<div class="mt-boxy-color"></div>
	    			<div class="medi-info">
		    			<h3>Emergency Case</h3>
						<p>I am text block. Edit this text from Appearance / Customize / Homepage header columns. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
						<a href="#" class="medi-info-btn">READ MORE</a>		    	
					</div>
    			</div>
				<div class="col-md-4 col-sm-4">
					<div class="medi-info">
		    			<h3>Emergency Case</h3>
						<p>I am text block. Edit this text from Appearance / Customize / Homepage header columns. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
						<a href="#" class="medi-info-btn">READ MORE</a>	
					</div>
				</div>
				<div class="col-md-4 col-sm-4 mt-boxy-3">
					<div class="mt-boxy-color"></div>
					<div class="time-info">
			    			<h3>Opening Hours</h3>
							<table style="margin: 8px 0px 0px;" border="1">
								<tbody>
									<tr>
									<td>Monday - Friday</td>
									<td>8.00 - 17.00</td>
									</tr>
									<tr>
									<td>Saturday</td>
									<td>9.30 - 17.30</td>
									</tr>
									<tr>
									<td>Sunday</td>
									<td>9.30 - 15.00</td>
									</tr>
								</tbody>
							</table>				    		
					</div>
				</div>
				</div>
			</div>
		</div>
	</section>
	<!--cta-->
	<!--about-->
	<section id="about" class="section-padding">
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-4 col-xs-12">
			        <div class="section-title">
			          <h2 class="head-title lg-line">The Medilap <br>Ultimate Dream</h2>
			          <hr class="botm-line">
			          <p class="sec-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
			          <a href="" style="color: #0cb8b6; padding-top:10px;">Know more..</a>
			        </div>
			    </div>
			    <div class="col-md-9 col-sm-8 col-xs-12">
			       <div style="visibility: visible;" class="col-sm-9 more-features-box">
			          <div class="more-features-box-text">
			            <div class="more-features-box-text-icon"> <i class="fa fa-angle-right" aria-hidden="true"></i> </div>
			            <div class="more-features-box-text-description">
				            <h3>It's something important you want to know.</h3>
				            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.</p>
				        </div>
			          </div>
			          <div class="more-features-box-text">
			            <div class="more-features-box-text-icon"> <i class="fa fa-angle-right" aria-hidden="true"></i> </div>
			            <div class="more-features-box-text-description">
				            <h3>It's something important you want to know.</h3>
				            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.</p>
				        </div>
                        </div>
			        </div>
			    </div>
			</div>
		</div>
	</section>
	<!--/ about-->
	<!--doctor team-->
	<section id="doctor-team" class="section-padding">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2 class="ser-title">Meet Our Doctors!</h2>
					<hr class="botm-line">
				</div>
				<div class="col-md-3 col-sm-3 col-xs-6">
			      <div class="thumbnail"> 
			      	<img src="../assets/img/doctor1.jpg" alt="..." class="team-img" style='width:100%;'>
			        <div class="caption">
			          <h3>Jessica Wally</h3>
			          <p>Doctor</p>
			          <ul class="list-inline">
			            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
			            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
			            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			    <div class="col-md-3 col-sm-3 col-xs-6">
			      <div class="thumbnail"> 
			      	<img src="../assets/img/doctor2.jpg" alt="..." class="team-img" style='width:100%;'>
			        <div class="caption">
			          <h3>Iai Donas</h3>
			          <p>Doctor</p>
			          <ul class="list-inline">
			            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
			            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
			            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			    <div class="col-md-3 col-sm-3 col-xs-6">
			      <div class="thumbnail"> 
			      	<img src="../assets/img/doctor3.jpg" alt="..." class="team-img" style='width:100%;'>
			        <div class="caption">
			          <h3>Amanda Denyl</h3>
			          <p>Doctor</p>
			          <ul class="list-inline">
			            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
			            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
			            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			    <div class="col-md-3 col-sm-3 col-xs-6">
			      <div class="thumbnail"> 
			      	<img src="../assets/img/doctor4.jpg" alt="..." class="team-img" style='width:100%;'>
			        <div class="caption">
			          <h3>Jason Davis</h3>
			          <p>Doctor</p>
			          <ul class="list-inline">
			            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
			            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
			            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			</div>
		</div>
	</section>
	<!--/ doctor team-->
	<!--testimonial-->
	<section id="testimonial" class="section-padding">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2 class="ser-title">see what patients are saying?</h2>
					<hr class="botm-line">
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="testi-details">
						<!-- Paragraph -->
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="testi-info">
						<!-- User Image -->
						<a href="#"><img src="../assets/img/thumb.png" alt="" class="img-responsive" style='width:100%;'></a>
						<!-- User Name -->
						<h3>Alex<span>Texas</span></h3>
					</div>
				</div>
			    <div class="col-md-4 col-sm-4">
					<div class="testi-details">
						<!-- Paragraph -->
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="testi-info">
						<!-- User Image -->
						<a href="#"><img src="../assets/img/thumb.png" alt="" class="img-responsive" style='width:100%;'></a>
						<!-- User Name -->
						<h3>Alex<span>Texas</span></h3>
					</div>
				</div>
			    <div class="col-md-4 col-sm-4">
					<div class="testi-details">
						<!-- Paragraph -->
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="testi-info">
						<!-- User Image -->
						<a href="#"><img src="../assets/img/thumb.png" alt="" class="img-responsive" style='width:100%;'></a>
						<!-- User Name -->
						<h3>Alex<span>Texas</span></h3>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--/ testimonial-->
	<!--cta 2-->
	<section id="cta-2" class="section-padding">
		<div class="container">
			<div class=" row">
				<div class="col-md-2"></div>
	            <div class="text-right-md col-md-4 col-sm-4">
	              <h2 class="section-title white lg-line">« A few words<br> about us »</h2>
	            </div>
	            <div class="col-md-4 col-sm-5">
	              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typek
	              <p class="text-right text-primary"><i>— Medilap Healthcare</i></p>
	            </div>
	            <div class="col-md-2"></div>
	        </div>
		</div>
	</section>
	<!--cta-->
	<!--contact-->
	<section id="citas" class="section-padding">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2 class="ser-title">Agenda una cita</h2>
					<hr class="botm-line">
				</div>
				<div class="col-md-4 col-sm-4">
			      <h3>Información de contacto</h3>
			      <div class="space"></div>
			      <p><i class="fa fa-map-marker fa-fw pull-left fa-2x"></i>321 Awesome Street<br>
			        New York, NY 17022</p>
			      <div class="space"></div>
			      <p><i class="fa fa-envelope-o fa-fw pull-left fa-2x"></i>info@companyname.com</p>
			      <div class="space"></div>
			      <p><i class="fa fa-phone fa-fw pull-left fa-2x"></i>+1 800 123 1234</p>
			    </div>
				<div class="col-md-8 col-sm-8 marb20" style="margin-top: -50px;">
				<div class="alert alert-info fade in alert-dismissable">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">x</a>
  					<strong>¡Atención!</strong> Al pulsar las flechas usted puede cambiar de mes.
				</div>
							<div class="form-group">
								<button class="btn btn-danger" v-on:click="cancelarDialog">Cancelar una cita</button>
								<button class="btn btn-info" v-on:click="reagendarPaso1">Reagendar una cita</button>

							</div>		
							 <div class="form-group">
              					<label for="message-text" class="form-control-label">Servicio:</label>
              					<select class="form-control" v-model="tipo_id">
									<option v-for="servicio in servicios" :value="servicio.id">{{servicio.nombre}}</option>
								</select>
            				</div>
            				<div v-if="actualizando_coloreado" align="center">
            					<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i> Actualizando calendario ...
            				</div>
  							<div id="calendar"></div>	
        					<div></div>
        					<div><span class="glyphicon glyphicon-stop IndicadorVerde"></span> <span class="LabelIndicador">Alta disponibilidad</span></div>
        					<div><span class="glyphicon glyphicon-stop IndicadorAmarillo"></span> <span class="LabelIndicador">Poca disponibilidad</span></div>
        					<div><span class="glyphicon glyphicon-stop IndicadorRojo"></span> <span class="LabelIndicador">Sin disponibilidad</span></div>
    					
				</div>
			</div>
		</div>
	</section>
	<!--/ contact-->
	<!--footer-->
	<footer id="footer">
		<div class="top-footer">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-4 marb20">
							<div class="ftr-tle">
								<h4 class="white no-padding">About Us</h4>
							</div>
							<div class="info-sec">
								<p>Praesent convallis tortor et enim laoreet, vel consectetur purus latoque penatibus et dis parturient.</p>
							</div>
					</div>
					<div class="col-md-4 col-sm-4 marb20">
						<div class="ftr-tle">
							<h4 class="white no-padding">Quick Links</h4>
						</div>
						<div class="info-sec">
							<ul class="quick-info">
								<li><a href="index.html"><i class="fa fa-circle"></i>Home</a></li>
								<li><a href="#service"><i class="fa fa-circle"></i>Service</a></li>
								<li><a href="#citas"><i class="fa fa-circle"></i>Appointment</a></li>
							</ul>
						</div>
					</div>
					<div class="col-md-4 col-sm-4 marb20">
						<div class="ftr-tle">
							<h4 class="white no-padding">Follow us</h4>
						</div>
						<div class="info-sec">
							<ul class="social-icon">
								<li class="bglight-blue"><i class="fa fa-facebook"></i></li>
								<li class="bgred"><i class="fa fa-google-plus"></i></li>
								<li class="bgdark-blue"><i class="fa fa-linkedin"></i></li>
								<li class="bglight-blue"><i class="fa fa-twitter"></i></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-line">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						© Copyright Medilab Theme. All Rights Reserved
                        <div class="credits">                          
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<!--/ footer-->


			<!-- MODAL PARA AGENDAR -->
			<div id="registrarCitaModal" class="modal fade">
			<div class="modal-dialog">
			    <div class="modal-content">
			        <div class="modal-header">
			          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			            <span aria-hidden="true">&times;</span>
			          </button>
			          <h4 class="modal-title" id="exampleModalLabel">Agendar una cita</h4>
			        </div>
			        <div class="modal-body">
			<!-- Nombre -->
			            <div class="form-group">
			              <label for="recipient-name" class="form-control-label">Nombre:</label>
			              <input type="text" name="cliente_nombre" class="form-control" id="recipient-name" v-model="cliente_nombre">
			            </div>

			<!-- TELEFONO -->
			            <div class="form-group">
			              <label for="message-text" class="form-control-label">Telefono:</label>
			              <input type="text" name="cliente_telefono" class="form-control" id="recipient-phone" v-model="cliente_telefono">
			            </div>
			<!-- EMAIL -->
			            <div class="form-group">
			              <label for="message-text" class="form-control-label">Correo electrónico:</label>
			              <input type="text" name="cliente_email" class="form-control" id="recipient-email" v-model="cliente_email">
			            </div>
			<!-- SERVICIOS -->
			            <div class="form-group">             
			            <label class="form-control-label">Escoja un servicio</label>
			            	<select class="form-control" v-model="tipo_id_agendar">
			            	<option v-for="servicio in servicios" :value="servicio.id">
			            		{{ servicio.nombre }}
			            	</option>
			  					
							</select>
			            </div>
			<!-- Hora -->
			            <div class="form-group">
			              <label for="message-text" class="form-control-label"><i v-if ="horas_disponibilidad_cargando" class="fa fa-spinner fa-pulse fa-fw"></i>Hora:</label>
							<select class="form-control" v-model="fecha_inicio" name="fecha_inicio" v-if="hours != []">
							<option v-for="hour in hours" :value="hour.value">
								{{ hour.text }}
							</option>
			  					
							</select>
			                <select v-else class="form-control" name="fecha_inicio" disabled></select>
			            </div>
			            <div class="form-group">
			            	<label>Cuento con un cupón de descuento</label>
			            	<input type="checkbox" v-model="cupon_select">
			            </div>
			            <div class="form-group-inline" v-if="cupon_select">
			            	<div v-if="cupon_validando" class="alert alert-info"><h6><i class="fa fa-circle-o-notch fa-spin fa-fw"></i> validando cupón...</h6></div>
			            	<div v-if="cupon_validado" class="alert alert-success"><h6><i class="fa fa-check"></i> descuento aplicado</h6></div>
			            	<div v-if="cupon_error" class="alert alert-danger"><h6> <i class="fa fa-times"></i> Ha ocurrido un error : {{cupon_error_mensaje}}</h6></div>
			            	<div v-if="cupon_error_server" class="alert alert-danger"><h6> <i class="fa fa-times"></i> Ha ocurrido un error, intente más tarde</h6></div>
			            	<div class="form-inline">
			            		<label for="cupon">Cupon de descuento : </label>
			            	<input type="text" placeholder="Ingresa el código del cupón" class="form-control" v-model="codigo_cupon">
			            	<button class="btn btn-info" v-on:click="validarCupon">Aplicar cupón</button>
			            	</div>
			            </div>

			        </div>
			<!--  ALERTAS DE CREACION CITA -->
					<div align="center">
						<h4>Costo : ${{cita_costo_total}} {{cita_costo_denominacion}}</h4>
					</div>
						      <div v-show="agendarcita_status_neutral == false">
						      	<div v-if="agendarcita_status_agendando" class="alert alert-info">
						      		<h4>
						      			Registrando cita
						      			<i class="fa fa-refresh fa-spin fa-1x fa-fw"></i>
									</h4>
						      	</div>
						      	<div v-if="agendarcita_status_exitoso" class="alert alert-success">
						      		<h4>
						      			La cita se ha creado correctamente.
							        	<i class="fa fa-check"></i>
									</h4>
						      	</div>
						      	<div v-if="agendarcita_status_error" class="alert alert-danger">
						      		<h4>
						      			No se ha podido crear la cita <i class="fa fa-times"></i>
						      			<ul>
						      				<li v-for="error_ag in agendarcita_error_mensaje">
						      					{{error_ag}}
						      				</li>
						      			</ul>	
									</h4>
						      	</div>
						      </div>

			        <div class="modal-footer">
			          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
			          <button type="button" class="btn btn-primary" v-on:click="agendarCita">Agendar Cita</button>
			        </div>
			      </div>
			</div>
			</div>
			<!-- FIN MODAL -->


 
<!-- Modal para reagendar cita -->
<div id="reagendar_cita" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Cita : {{cita_codigo_seleccionado}}</h4>
      </div>

      <div class="modal-body">
        <div class="form-group">
        	<label>Nombre : {{cita_cliente_nombre}}</label>
        </div>
       
        <div class="form-group">
        	<label> Fecha y hora : {{cita_cliente_fecha_display}}</label>
        </div>
        <!--Lista de Servicios-->
        <div class="form-group">
        	<label for="servicio">Servicio</label>
        	<select id="servicio" class="form-control" v-model="cita_cliente_servicioid">
        		<option v-for="servicio in servicios" :value="servicio.id">{{servicio.nombre}}</option>
        	</select>
        </div>
        <!--Fecha-->
        <div class="form-group">             
            <label for="datepicker" class="form-control-label">Fecha</label>
            <input type="text" id="datepicker" class="form-control" :value="cita_cliente_fecha">
        </div>
          <!-- Hora -->
        <div class="form-group">
            <label for="message-text" class="form-control-label"><i v-if ="horas_disponibilidad_cargando" class="fa fa-spinner fa-pulse fa-fw"></i> Hora:</label>
            <select class="form-control" v-model="nueva_fecha" name="fecha_inicio" v-if="(hours.length > 0) && (hours_no_disponibilidad == false)">
            	<option value=""  disabled>Selecciona una hora</option>
                <option v-for="hour in hours" :value="hour.value">
                        {{ hour.text }}
                </option>
            </select>
            <select v-if="(hours.length == 0) && (hours_no_disponibilidad == false)" class="form-control" name="fecha_inicio" disabled>
            </select>
            <select v-if="hours_no_disponibilidad" class="form-control" name="fecha_inicio" disabled>
            	<option><i class="fa fa-calendar-times-o" aria-hidden="true"></i> Sin disponibilidad de horario</option>
            </select>



        </div> 






        </div>
        <!--Fin modal body-->
      <div class="modal-footer">
			      	<div v-if="reagendarCita_estado_encurso" class="alert alert-info" align="center">
			      		<h4>
			      			Reagendando cita 
			      			<i class="fa fa-refresh fa-spin fa-1x fa-fw"></i>
						</h4>
			      	</div>
			      	<div v-if="reagendarCita_estado_error" class="alert alert-danger" align="center">
			      		<h4>
			      			No se ha podido reagendar la cita <i class="fa fa-times"></i>
			      			<ul>
			      				<li v-for="error_ag in error_reagendarCita">
			      					<p v-for="suberror in error_ag">
			      						- {{suberror}}
			      					</p>

			      				</li>
			      			</ul>	
						</h4>
			      	</div>
			      	
			    
      	<button type="button" class="btn btn-info" v-on:click="reagendarCita">Reagendar</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Salir</button>
      </div>
    </div>

  </div>
</div>



	</div>

</template>

<script>

    export default {
    	name:'home',    	
    	data(){
    		return {
    			msg: 'ok',
    			agendarcita_status_neutral : false,
                agendarcita_status_agendando : false,
                agendarcita_status_exitoso : false, 
                agendarcita_status_error : false,
                agendarcita_error_mensaje : [],
    			reagendarCita_estado_encurso : false,
    			reagendarCita_estado_exitoso : false,
    			reagendarCita_estado_error : false,
    			error_reagendarCita : [],
    			horas_disponibilidad_cargando : false,
    			error_agendarCita: [],
    			tipo_id: null,
    			cliente_nombre: '',
    			cliente_email: '',
    			cliente_telefono: '',
    			hora_cita: '',
    			fecha_inicio: '',
    			fecha_final: '',
    			servicios: [],
    			hours:[],
    			disponibilidad_servicio : [],
    			flag : false,
    			cita_codigo_seleccionado : null, 
		      	cita_cliente_nombre : null,
		      	cita_cliente_servicioid : null,
		      	cita_cliente_fecha : null,
		      	cita_cliente_fecha_display : null,
		      	cita_reagendar_id : null,
		      	nueva_fecha : '',
		      	no_laborales : [],
		      	hours_no_disponibilidad : false,
		      	actualizando_coloreado : false,
		      	cita_costo_total : 0, 
		      	cita_porcentaje_descuento : 0,
		      	cita_costo_denominacion : '',
		      	tipo_id_agendar : null,
		      	fecha_seleccionada : null,
		      	cupon_select : false,
		      	cupon_validando : false,
		      	cupon_validado : false,
		      	cupon_error : false,
		      	cupon_error_mensaje : '',
		      	cupon_error_server :false,
		      	codigo_cupon : '',
    		}
    	},

    	mounted(){    		

    			this.fetchDatas();

    			$(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {
					        event.preventDefault();
					        var hash = this.hash;
					        $('html, body').animate({
					            scrollTop: $(hash).offset().top
					        }, 900, function(){
					            window.location.hash = hash;
					        });
    			});
       
    			//jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
			        if ($(".navbar-default").offset() != undefined  && $(".navbar-default").offset().top > 50) {
			            if ( $(".navbar-default").offset() != undefined && $(".navbar-default").offset().top > 50) {
			                $(".navbar-fixed-top").addClass("top-nav-collapse");
			            } else {
			            $(".navbar-fixed-top").removeClass("top-nav-collapse");
			        }
			    }
    });
    		},

    //fecha ,disponibilidad

    		watch:{
    			'tipo_id': function(){
    				this.servicioDisponibilidadColoreado(true,null);

    			},
    			'tipo_id_agendar' : function(){
    				var vm  = this;
    				vm.servicioHorasDisponibles(vm.fecha_seleccionada);
    				vm.ajustarCosto();
    				vm.validarCupon();
    			},
    			'nueva_fecha' : function(){
    				console.log("La hora de la cita cambia ! ");
    				//this.crearCalendarioPicker();
	    		},
	    		'cita_cliente_fecha' : function(){
	    			this.servicioHorasDisponibles(this.cita_cliente_fecha);
	    		},
	    		'cita_cliente_servicioid' : function(){
	    			var vm = this;
	    			var datas = {'tipo_id' : vm.cita_cliente_servicioid,'calendario_id' : vm.$store.state.calendario_id};
	    			this.crearCalendarioPicker();
	    			this.servicioDisponibilidadColoreado(false,datas);
	    			console.log(this.cita_cliente_fecha);
	    			this.servicioHorasDisponibles(this.cita_cliente_fecha);
	    		}
	    		
    		},
    	methods:{
    		notificar : function(){
    			var vm = this;
    			console.log("Se va a notificar! ");
    			vm.$store.state.socket.emit('notificar_cita',{'id_user' : vm.$store.state.calendario_id});

    		},

    		ajustarCosto : function(){
    			var vm = this;
    			var servicio = $.grep(vm.servicios, function (element, index) {return element.id == vm.tipo_id_agendar;});
    				if(servicio.length > 0 ) 
    				{
    					vm.cita_costo_total = servicio[0].costo - (servicio[0].costo * (vm.cita_porcentaje_descuento/100) );
    					vm.cita_costo_denominacion = servicio[0].denominacion;

    				}
    		},

    		fetchDatas : function(){
    			var vm = this;
    			vm.$http.get('tipo',{params : {'calendario_id' : vm.$store.state.calendario_id}}).then(
    				//success
    				function(response){
    					vm.servicios = response.data;
    					vm.tipo_id  = vm.servicios[0] != undefined ? vm.servicios[0].id : null;
    					
    				},
    				function(response){
    					console.error("Error :(");
    				}
    				//error

    				);
    		},
    		validarCupon : function(){

    			var vm = this;
    			vm.cita_porcentaje_descuento = 0;
    			vm.ajustarCosto();
    			if(vm.codigo_cupon == '' || vm.codigo_cupon == ' ' || vm.codigo_cupon == ' ' || vm.codigo_cupon == null) return;
    			var datas = {'codigo' : vm.codigo_cupon , 'id_calendario' : vm.$store.state.calendario_id, 'servicio_id' : vm.tipo_id_agendar};
    			vm.cupon_validando = true;
    			vm.cupon_error = false;
    			vm.cupon_validado = false;
    			vm.cupon_error_server = false;
    			vm.$http.get('verificarcupon',{params : datas}).then(
    				//success
    				function(response){
    					vm.cupon_validando = false;
    					vm.cupon_validado = true;
    					vm.cita_porcentaje_descuento = response.data.descuento;
    					vm.ajustarCosto();
    				},
    				//error
    				function(response){
    					   vm.cita_porcentaje_descuento = 0;
    					   vm.ajustarCosto();
    					   vm.cupon_validando = false; 
    					if(response.error == 500) vm.cupon_error_server = true;
    					else {
    						vm.cupon_error = true;	
    						vm.cupon_error_mensaje = response.data.error;
    					}

    				
    				}

    				);
    		},
    		reagendarCita : function(){
    			var vm = this;
    			vm.reagendarCita_estado_error = false;
    			vm.reagendarCita_estado_encurso = true;
    			vm.error_reagendarCita = [];

    			var datas  = {'id_cita' : this.cita_reagendar_id,'tipo_id' : this.cita_cliente_servicioid,'calendario_id' : this.$store.state.calendario_id,'fecha_inicio' : this.nueva_fecha};

    			 this.$http.put('cita-r',datas).then(
    			 	//success
    			 	function(response){
    					vm.reagendarCita_estado_encurso = false;

    			 		$('#reagendar_cita').modal('hide');
    			 		/*
							 {'codigo' : data.codigo , 
            'cliente_nombre' : data.cliente_nombre,
            'fecha':data.fecha,
            'servicio' : data.servicio
        }
    			 		*/

    			 vm.$store.state.socket.emit('notificar_reagendar', 
    			 {'id_user' : vm.$store.state.calendario_id,
    			 'codigo' : response.data.codigo,
    			 'cliente_nombre' : response.data.cliente_nombre,
    			 'fecha' : moment(vm.nueva_fecha).format('LLLL'),
    			 'servicio' : response.data.servicio
    			}
    			 );
    			 
		

    			 	  $.confirm({
						    title: '¡Cita reagendada!',
						    content: 'La cita se ha reagendado para el día : '+ moment(vm.nueva_fecha).format('LLLL'),
						    type: 'green',
						    typeAnimated: true,
						    buttons: {
						        entendido: {
						            text: 'Entendido',
						            btnClass: 'btn-blue',
						            action: function(){
						            }
						        }
						    }
						});
    			 	},
    			 	//error
    			 	function(response){
    			 		vm.reagendarCita_estado_encurso = false;
    			 		vm.reagendarCita_estado_error = true;
    			 		if(response.status == 500) {
    			 			vm.error_reagendarCita = ['Ha ocurrido un error en el servidor, intente más tarde o contacte al administrador del sistema'];
    			 		}

    			 		else 
    			 			vm.error_reagendarCita = response.data.errors;
    			 		


    			 		console.log("ERROR " );

    			 	}

    			 	);


    		},
            cancelarDialog : function(){
            			var vm = this;
                		$.confirm({
                            title: 'Código',
                            content: '' +
                            
                            '<div class="form-group">' +
                            '<label>Ingresa el código de la cita que quieres cancelar</label>' +
                            '<input type="text" placeholder="Código de la cita" class="codigo form-control" required />' +
                            '</div>'+
                            '<div class="form-group">' +
                            '<label>Ingresa el número telefónico o correo electronico con el que '+'registraste en la cita</label>' +
                            '<input type="text" placeholder="Número de telefono o correo'+'electrónico" class="numeromail form-control" required />' +
                            '</div>'

                            ,
                            buttons: {
                                formSubmit: {
                                    text: 'Cancelar cita',
                                    btnClass: 'btn-blue',
                                    action: function () {
                                        var codigo = this.$content.find('.codigo').val();
                                        var numeromail = this.$content.find('.numeromail').val();

                                        if(! (codigo || numeromail)){
                                            $.alert('Todos los campos son obligatorios');
                                            return false;
                                        }

                                        vm.$http.delete('cita',{params : {'codigo' : codigo , 'numeromail' : numeromail}}).then(
                                        	//success
                                        	function(response){
                                        		$.confirm({
													    title: 'Cita cancelada exitosamente',
													    content: 'La cita '+response.data.codigo+ ' ha sido cancelada',
													    type: 'green',
													    typeAnimated: true,
													    buttons: {
													        ok: {
													            text: 'Hecho',
													            btnClass: 'btn-blue'
													        }
													    }
													});
                                        	},
                                        	//error
                                        	function(response){
                                        		var data_errors = response.data.errors;
                                        		var data_errors_parse = '';
                                        		for (var i = 0; i < data_errors.length; i++)data_errors_parse+= '<br>- '+data_errors[i]; 
                                        		

                                        		$.confirm({
													    title: 'Error',
													    content: 'La cita no pudo cancelarse por el siguiente motivo : '+data_errors_parse,
													    type: 'red',
													    typeAnimated: true,
													    buttons: {
													        ok: {
													            text: 'Hecho',
													            btnClass: 'btn-blue'
													        }
													    }
													});	


                                        	}
                                        		
                                        	);


                                    }
                                },
                                cancel : {
                                	text : 'Salir'
                                },
                            },
                            onContentReady: function () {
                                // bind to events
                                var jc = this;
                                this.$content.find('form').on('submit', function (e) {
                                    // if the user submits the form by pressing enter in the field.
                                    e.preventDefault();
                                    jc.$$formSubmit.trigger('click'); // reference the button and click it
                                });
                            }
                        });
			
            },
            reagendarPaso1: function()
            {
            	var vm = this;
                		$.confirm({
                            title: 'Código',
                            content: '' +
                            
                            '<div class="form-group">' +
                            '<label>Ingresa el código de la cita que quieres reagendar</label>' +
                            '<input type="text" placeholder="Código de la cita" class="codigo form-control" required />' +
                            '</div>'+
                            '<div class="form-group">' +
                            '<label>Ingresa el número telefónico o correo electronico con el que '+'registraste en la cita</label>' +
                            '<input type="text" placeholder="Número de telefono o correo'+'electrónico" class="numeromail form-control" value="michel_cristian@hotmail.com" required />' +
                            '</div>'

                            ,
                            buttons: {

                                verificar: {
                                    text: 'Verificar codigo',
                                    btnClass: 'btn-blue',
                                    action: function () {
                                        var codigo = this.$content.find('.codigo').val();
                                        var numeromail = this.$content.find('.numeromail').val();

                                        if(! (codigo || numeromail)){
                                            $.alert('Todos los campos son obligatorios');
                                            return false;
                                        }

                                        vm.$http.get('verificar_cita',{params : {'codigo' : codigo , 'numeromail' : numeromail}}).then(
                                        	//success
                                        	function(response){
                                        		console.log(response.data);
                                        		vm.cita_codigo_seleccionado = response.data.cita.codigo;
                                        		vm.cita_cliente_nombre = response.data.cita.cliente_nombre; 
                                        		vm.cita_cliente_servicioid = response.data.cita.servicioid;
                                        		
                                        		vm.cita_cliente_fecha_display = moment(response.data.cita.fecha).format('LLLL');

                                        		vm.cita_cliente_fecha = moment(response.data.cita.fecha).format("YYYY-MM-DD"); 

                                        		vm.cita_reagendar_id = response.data.cita.id;

                                        		$('#reagendar_cita').modal('show');
                                        		//despliega modal para reagendar con los datos
                                        	},
                                        	//error
                                        	function(response){

                                        		var data_errors = response.data.errors;
                                        		var data_errors_parse = '';
                                        		for (var i = 0; i < data_errors.length; i++)data_errors_parse+= '<br>- '+data_errors[i]; 
                                        		

                                        		$.confirm({
													    title: 'Error',
													    content: 'Fallo en la verificación de la cita : '+data_errors_parse,
													    type: 'red',
													    typeAnimated: true,
													    buttons: {
													        ok: {
													            text: 'Hecho',
													            btnClass: 'btn-blue'
													        }
													    }
													});	


                                        	}

                                        		
                                        	);
							}
						},
						cancel : {
                                	text : 'Salir'
                                },
					}

					});

            },

    		servicioDisponibilidadColoreado : function(flag,datas_foreign){
	                var vm = this;
	                var datas = null;
	                vm.actualizando_coloreado = false;
	                if(flag) {
	                	datas = {'tipo_id' : vm.tipo_id,'calendario_id' : vm.$store.state.calendario_id}
	                	vm.actualizando_coloreado = true;
	                }
	                else datas = datas_foreign;

	                vm.$http.get('disponibilidad',{params : datas}).then(
	                    //success
	                    function(response){
	                    	vm.actualizando_coloreado = false;

	                        var disponibilidad = response.data.disponibilidades;
	                        var disponibilidad_arr = [];
	                        for(var i = 0 ; i < disponibilidad.length ; i++)
	                        {
	                        	disponibilidad_arr[disponibilidad[i].fecha] = disponibilidad[i].disponibilidad;
	                        }
	                        vm.disponibilidad_servicio = disponibilidad_arr;
	                        vm.no_laborales = response.data.no_laborales;
	                        console.log(response.data.disponibilidades);

	                        if(flag){
	                        	console.log("Crea calendario BUILDER !");
	                        	vm.createCalendar();
	                        }
	                        else vm.crearCalendarioPicker();

	                    },
	                    function(response){
	                    	vm.actualizando_coloreado = false;
	                        console.error(response.status);
	                    }
	                    );
            },
              buscarPorDisponibilidad : function(fecha){
              	var vm = this;
              	if(vm.no_laborales[fecha]) return 3;
              	

              	return vm.disponibilidad_servicio[fecha] != undefined ? vm.disponibilidad_servicio[fecha] : false;

                    },
            servicioHorasDisponibles : function(fecha){
            	var vm = this;
            	vm.hours_no_disponibilidad = false;
            	vm.horas_disponibilidad_cargando = true;
                vm.hours = [];
                var dia;
                if(fecha)  dia = new Date(fecha).toISOString();
                else dia = new Date(vm.date_selected).toISOString();
                console.log("Dia "+ dia)
                this.$http.get('servicio-disponible',{params : {'tipo_id' : vm.tipo_id, 'dia' : dia , 'calendario_id' : vm.$store.state.calendario_id}}).then(
                    //success
                    function(response){
                    	if(response.data.length == 0) vm.hours_no_disponibilidad  = true;
                        vm.hours = response.data;
                        console.log(response.data);
                        vm.horas_disponibilidad_cargando = false;
                    },
                    //error
                    function(response){
                        vm.hours = [];
                        vm.horas_disponibilidad_cargando = false;
                    }

                    );
            },
             crearCalendarioPicker : function(){
                    var vm = this;
                    var availableDates = [];
                for (var i = 0; i < vm.disponibilidad_servicio.length; i++) {
                   availableDates.push( vm.disponibilidad_servicio[i].fecha);
                };

            $( "#datepicker" ).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date(), 
                    onSelect: function () {
                        vm.cita_cliente_fecha = $.datepicker.formatDate("yy-mm-dd", $(this).datepicker('getDate'));
                    },
                    beforeShowDay: function(d) {
                        var ymd = d.getFullYear() +'-';
                        ymd +=  (d.getMonth()<9) ? ("0"+ (d.getMonth()+1)) : (d.getMonth()+1);
                        ymd+= "-"; 
        
                        if(d.getDate()<10) ymd+="0"+ d.getDate();
                        else  ymd+=d.getDate();

                       
                        var disponibilidad = vm.buscarPorDisponibilidad(ymd);
                        
                        if ( disponibilidad != false) {
                                switch(disponibilidad)
                                {
                                    case 1 : {
                                        return [true, "disponibilidad-alta"]; 
                                    }break;                                
                                    case 2: {
                                        return [true, "disponibilidad-media"]; 
                                    }break;
                                    case 3 : {
                                        return [true, "disponibilidad-baja"]; 
                                    }
                                    default : {
                                        return [true, "disponibilidad-alta"]; 
                                    }

                                }

                            
                        } else{
                                return [true, "disponibilidad-alta"]; 
                        }
                    }
                    });
             

            },
    		createCalendar : function(){
    		 var vm  = this;
    		try{
    			$('#calendar').fullCalendar('destroy');
    		}
    		catch(err){
    			console.log("No había calendario que destruir");
    		}
            $('#calendar').fullCalendar({

			select: function(start, end, allDay) {
            	var check = start._d.toJSON().slice(0,10); 
            	var today = new Date().toJSON().slice(0,10);
		    	if(check < today){
        // Previous Day. show message if you want otherwise do nothing.
                // So it will be unselectable  
                $('#calendar').fullCalendar('unselect');        		
        		return false;
    			}
    			
        // Its a right date
                // Do something
    			else{
    				$('#registrarCitaModal').modal('show');
  					$('modal').on('hidden.bs.modal', function(){
  					$('label.error').remove();
  				});
    			}
  			},
  			dayClick: function(date, jsEvent, view){
  					vm.fecha_seleccionada = date;
  				
  			},

            header: {
                left: 'prev, next, month',
                center: 'title',
                right: ''
            },
            
            navLinks: false, // can click day/week names to navigate views
            selectable: true,
            selectHelper: true,            
            dayRender: function (date, cell) {
            		console.log(vm.disponibilidad_servicio);
            			var disponibilidad = vm.disponibilidad_servicio[moment(date).format("YYYY-MM-DD")];
            			if(disponibilidad)
            			{
            				switch(disponibilidad)
            				{
            					case 1: cell.css("background-color", "#A5DBEB");
            					break;
            					case 2: cell.css("background-color", "#FFFF84");
            					break;
            					case 3: cell.css("background-color", "#FF7575"); 
            					break;

            				}
            			}
            			else{
            				
            				var date_d  = moment(date).format("YYYY-MM-DD");
            				var today = moment(new Date()).format("YYYY-MM-DD");
		    				if(date_d < today)	cell.css("background-color", "#F5F5F5");
		    				else cell.css("background-color", "#A5DBEB");

            			}


                        
                        },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: this.citas
            
        })

            },

        agendarCita: function(event){
        			 var vm = this;
    				var id_selected = vm.tipo_id;
    				
    				var service = $.grep(vm.servicios, function(e){ return e.id == id_selected; });
    				var servicio = null;
    				if(service.length > 0 ) servicio = service[0];
    				else {
    					alert('No se ha seleccionado un servicio');
    					return;
    				}


    			vm.errorMessage=''; 
               
    			var dia_seleccionado = vm.fecha_seleccionada;

    			var dateformat = new Date(vm.fecha_inicio);       			
    			var fecha_final = this.addMinutes(dateformat,servicio.duracion);
                
                var fecha_final = moment(fecha_final).format("YYYY-MM-DD HH:mm:ss");
                console.log(fecha_final);
                
    			var calendarInformation = {
    				"calendario_id": vm.$store.state.calendario_id,
    				"tipo_id": servicio.id,
    				"fecha_inicio": vm.fecha_inicio,
    				"fecha_final": fecha_final,
    				"cliente_nombre": vm.cliente_nombre,
    				"cliente_telefono": vm.cliente_telefono,
    				"cliente_email": vm.cliente_email,
    				"costo_total" : vm.cita_costo_total,
    				"cupon_descuento" : vm.codigo_cupon
    			};    			
    		
                $(event.target).attr('disabled',true);

                vm.agendarcita_status_neutral = false; 
                vm.agendarcita_status_agendando = true;
                vm.agendarcita_status_exitoso = false; 
                vm.agendarcita_status_error = false;
                vm.agendarcita_error_mensaje = [];

    			vm.$http.post('cita', calendarInformation).then(
						//success
						function(response){

                        vm.agendarcita_status_agendando = false;
                        vm.agendarcita_status_exitoso = true;

                        $(event.target).attr('disabled',false);
                        vm.cliente_nombre = "";
                        vm.cliente_telefono = "";
                        vm.cliente_email = "";
                        $("#registrarCitaModal").modal('hide');
						  vm.fetchDatas();
                          setTimeout(function() {
                            vm.agendarcita_status_exitoso = false;
                            vm.agendarcita_status_neutral = true;
                            
                          }, 4000);
						},
						//error
						function(response){		
							console.log(response.data);
                        $(event.target).attr('disabled',false);	
                        vm.agendarcita_status_agendando = false;	
                        vm.agendarcita_status_error = true;

						  
                          switch(response.status)
                          {
                            case 500 : 
                            {
                                vm.agendarcita_error_mensaje = ["Ocurrió un error en el servidor, intente más tarde o contacte al administrador del sistema"];
                            }break;

                            case 400 : 
                            {
                                
                                vm.agendarcita_error_mensaje = response.data.errors;


                            }break;
                            case 404 : 
                            {
                                vm.agendarcita_error_mensaje = ["Ya existe una cita para esta hora y fecha, elija otra hora o fecha"];

                            }break;

                            
                            default : {
                                vm.agendarcita_error_mensaje = ["Ha ocurrido un error inesperado, intente más tarde"];
                            }
                          }	
						 
						});
    		},
    		addMinutes : function(date,minutes){

    			return new Date(date.getTime() + minutes*60000);

    		},    
        
	  },
    	}
</script>
