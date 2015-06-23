<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<title>Hangman</title>
	<link href="css/hangman.css" rel="stylesheet" type="text/css">

	<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	
</head>
<body>
		<div id="play">New Game</div>
		<div id="word"></div>
		<form>
			<input type="text" id="letters" name="letters" autocomplete ="off">
			<input id="submit"class="grow" type="button" value="Submit" onclick="checkLetter(letters.value)">
		</form>
		<div id="badguesses"></div>
		<canvas id="stage" width="1000" height ="1000"></canvas>	
</body>
<script type="text/javascript" src="hangmanlogic.js"></script>
<script>
	startGame();
	function stopRKey(evt) 
	{ 
		  var evt = (evt) ? evt : ((event) ? event : null); 
		  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
		  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
	} 

	document.onkeypress = stopRKey; 
</script>
</html>
