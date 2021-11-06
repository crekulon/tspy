<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="./coxg.css">	
	<link rel="icon" type="image/png" href="./img/coxgfv.png">

	<!-- Primary Meta Tags -->
	<title>Thunderspy Gaming - A City of Heroes Private Server</title>
	<meta name="title" content="Thunderspy Gaming - A City of Heroes Private Server">
	<meta name="description" content="Featuring massive character customization improvements, pet customization, new powersets and more, Thunderspy is the most advanced City of Heroes private server.">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://thunderspygaming.net">
	<meta property="og:title" content="Thunderspy Gaming - A City of Heroes Private Server">
	<meta property="og:description" content="Featuring massive character customization improvements, pet customization, new powersets and more, Thunderspy is the most advanced City of Heroes private server.">
	<meta property="og:image" content="https://eccentric.monster/tspy/img/thundersplash.png">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://thunderspygaming.net">
	<meta property="twitter:title" content="Thunderspy Gaming - A City of Heroes Private Server">
	<meta property="twitter:description" content="Featuring massive character customization improvements, pet customization, new powersets and more, Thunderspy is the most advanced City of Heroes private server.">
	<meta property="twitter:image" content="https://eccentric.monster/tspy/img/thundersplash.png">
    
    <script src="https://kit.fontawesome.com/ff46203259.js" crossorigin="anonymous"></script>
</head>

<body class="loading starting-intro">    
	<div id="socials">
		<a href="https://discord.gg/nDJgMeSCvt" target="_blank" name="Discord"><i class="fab fa-discord"></i></a>
		<a href="https://thunderspygaming.boards.net/" target="_blank" name="Forums"><i class="far fa-comments"></i></a>
		<a href="https://twitter.com/Tspygaming_COH" target="_blank" name="Twitter"><i class="fab fa-twitter"></i></a>
		<a href="https://www.patreon.com/coxg" target="_blank" class="supportlink" name="Support on Patreon"><i class="fab fa-patreon"></i></a>
		<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7NJGYSECLWZZ6&source=url" target="_blank" class="supportlink" name="Support with Paypal"><i class="fab fa-paypal"></i></a>
	</div>

	<section id="splash">
		<div class="bg">
			<div class="logo"></div>
			<div class="logo flip"></div>

			<div class="city"><div class="tower"></div></div>
			<div class="city flip"><div class="tower"></div></div>

			<div class="road">
				<div class="roadlines"></div>
			</div>
		</div>

		<h1 class="h1" t="THUNDERSPY">THUNDERSPY</h1>
		<h2 class="h1 flip" t="THUNDERSPY">THUNDERSPY</h2>

		<div class="ctas">
			<span class="motto">The Most Advanced City Of Heroes Private Server</span>
			<span class="cta-container">
				<a href="#newstuff" class="cta">WHAT'S NEW?</a>
				<a href="#play" class="cta playnow">PLAY NOW</a>
			</span>
			<span class="motto">It's Your Game</span>
		</div>
	</section>

	<section id="newstuff" class="infosection">
		<h2 class="motto">NEW &amp; IMPROVED CONTENT</h2>
		<div class="width-container selection-container">
			<div class="selection">
				<div class="selector selected" highlights="customization">
					Unparalleled Customization
				</div>
				<div class="selector" highlights="masterminds">
					Minion + Pet Customization
				</div>
				<div class="selector" highlights="newpowersets">
					New Powersets
				</div>
				<div class="selector" highlights="uppowersets">
					Updated Powersets
				</div>
				<div class="selector" highlights="scaling">
					Content Scaling
				</div>
			</div>

			<div class="highlight-images">
				<div class="image-container">
					<div class="image" style="background-image: url(./img/aokk.gif)"></div>
				</div>
			</div>

			<div class="selection-info">
				<span class="selection-title">Unparalleled Customization</span>
				<div class="selection-description">
					<p style="margin-bottom:2em;font-family:monospace">(FIEND'S NOTE: I haven't made this part functional yet, but it'll swap images and text when you click the buttons)</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque ipsum, vulputate eu dapibus et, facilisis a nunc. Cras nibh elit, placerat ac nisi eget, porttitor suscipit quam. Sed sollicitudin felis ac iaculis dapibus. Sed purus erat, iaculis nec orci eu, lacinia finibus massa. Cras non quam in leo posuere fermentum. Etiam ornare neque quis mauris imperdiet ullamcorper. Cras nec maximus tortor.</p>
					<p>Vivamus vel interdum lorem, at fringilla erat. Vestibulum in orci vitae enim efficitur ullamcorper vitae ac leo. </p>
				</div>
			</div>
		</div>
	</section>

	<section id="play" class="infosection">
		<div class="bg">
			<div class="city"></div>
		</div>

		<h2 class="motto title">PLAY NOW</h2>
		<div class="width-container play-container">
			<div class="playpanel">
				<h3 class="motto">How To play</h3>
				{{ site.data.howtoplay.body | markdownify}}
			</div>

			<div class="playpanel">
				<h3 class="motto">Accounts</h3>
				<div class="accountstuff">
					<div class="accountsection">
						<h4 class="selector">Create an Account</h4>
						<form action="account.php" method="POST">
							<input type="text" placeholder="user name" name="name">
							<input type="text" placeholder="email (optional)" name="email">
							<input type="password" placeholder="password" name="password">
							<input type="password" placeholder="repeat password" name="repeat">
							<input type="submit" name="create_account" value="Create">
						</form>
					</div>
		
					<div class="accountsection">
						<h4 class="selector">Reset Password</h4>
						<form action="account.php" method="POST">
							<input type="text" placeholder="user name" name="name">
							<input type="text" placeholder="email" name="email">
							<input type="submit" name="reset_password" value="Reset">
						</form>
					</div>
		
					<div class="accountsection">
						<h4 class="selector">Change Password</h4>
						<form action="account.php" method="POST">
							<input type="text" placeholder="user name" name="name">
							<input type="password" placeholder="old password" name="oldpass">
							<input type="password" placeholder="new password" name="newpass">
							<input type="password" placeholder="repeat password" name="repeat">
							<input type="submit" name="change_password" value="Change">
						</form>
					</div>
				</div>
			</div>

			<div class="playpanel about">
				<h3 class="motto">About Us</h3>		
				{{ site.data.aboutus.body | markdownify}}
				<div class="support">
					{{ site.data.supportus.body | markdownify}}
				</div>
			</div>
		</div>
	</section>

	<footer class="infosection">
		<div class="width-container">
			<div class="policybox">
				<h3 class="motto">Code of Conduct</h3>
				{{ site.data.codeofconduct.body | markdownify}}
			</div>

			<div class="policybox">
				<h3 class="motto">Terms of Service</h3>
				{{ site.data.termsofservice.body | markdownify}}
			</div>
		</div>

		<div class="qachan">
			<img src="./img/qachan.png" alt="QA Chan"> <span>PENDING QA-CHAN APPROVAL</span>
		</div>
	</footer>

	<script>
		function onLoaded(fn) {
			document.addEventListener("DOMContentLoaded", fn)
			if (document.readyState === "interactive" ||document.readyState === "complete" ) {fn()}
		}

		onLoaded(() => {
			setTimeout(()=>{
				document.querySelector('body').classList.remove('loading')
			}, 200)

			setTimeout(()=>{
				document.querySelector('body').classList.remove('starting-intro')
				document.querySelector('body').classList.add('intro')
			}, 1800)

			setTimeout(()=>{
				document.querySelector('body').classList.remove('intro')
			}, 4200)
		})

		let newStuffSelectors = document.querySelectorAll("#newstuff .selector")
		for (let i = 0; i < newStuffSelectors.length; i++) {
			const selector = newStuffSelectors[i];
			selector.addEventListener('mousedown', function(){
				let oldSelect = document.querySelector('#newstuff .selector.selected')
				if(oldSelect) oldSelect.classList.remove('selected')
				
				selector.classList.add('selected')
			})			
		}

		let accountSelectors = document.querySelectorAll(".accountstuff .selector")
		for (let i = 0; i < accountSelectors.length; i++) {
			const selector = accountSelectors[i];
			selector.addEventListener('mousedown', function(){
				let oldSelect = document.querySelector('.accountstuff .selector.selected')
				if(oldSelect) {
					oldSelect.classList.remove('selected')
					oldSelect.nextElementSibling.classList.remove('active')
				}

				selector.classList.add('selected')
				selector.nextElementSibling.classList.add('active')
			})			
		}

	</script>
</body>
</html>