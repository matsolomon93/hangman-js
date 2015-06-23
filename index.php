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
			<!-- looked like people signed in with username when they connect; possible to show usernames in this area? 
			If 2 players enter, give them a prompt to play hangman? -->
			</div>
		</div>
		<div class="convoList">
			<div id="conversation">
				<!-- prompt/message here asking each if they'd like to play. Let them convo and click "let's play" (below) if decide yes? -->
				<h3>Wanna Play Hangman?</h3>
			</div>
			<input id="data">
			<input id="datasend" type="button" value="send">
		</div>
		<div>
			<!-- button to play game. submit...send to next page where their username/id is entered in db. Next page will also prompt each for a word for other to guess -->
			<form class="playGame" role="form" name="playGame" action="choose.php" method="post">
	        	<button class="playButton" type="submit">Let's Play!</button>
	      	</form>
	  	</div>
	</body>
</html>