<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<script src="https://code.jquery.com/jquery-2.1.0.min.js"></script>
		<script src="http://localhost:8000/socket.io/socket.io.js">
		//Reload the page to get source for: http://localhost:8000/socket.io/socket.io.js
		</script>
		<link href="css/hangman.css" rel="stylesheet" />
	</head>
	<body>
		<div class="friendList">
			<b>Friends</b>
			<div id="friends">
			<!-- looked like people signed in with username when they connect; possible to show usernames in this area? -->
			</div>
		</div>
		<div class="convoList">
			<div id="conversation">
				<!-- if they want, here they can message back and forth and get their game on -->
				<h3>Message</h3>
			</div>
			<input id="data">
			<input id="datasend" type="button" value="send">
		</div>
		<div>
			<!-- form to start game. submit...send to next page where words are entered in db. Next page will be the game -->
			<form class="chooseWord" role="form" name="chooseWord" action="hangman.php" method="post">
	        	<h2>Choose a Word for [username] to Guess</h2>
	        	<input type="text" id="word" placeholder="human" required autofocus>
	        	<button class="wordChosen" type="submit">Start Game</button>
	      	</form>
	  	</div>
	</body>
</html>