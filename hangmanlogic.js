
//Global Variables
var canvas = document.getElementById('stage');
var word = document.getElementById('word');
var badguesses = document.getElementById('badguesses');
var word2Guess;
var wordLength;
var badGuess=0;
var rightGuess;


var images = new Array();
images[0]="img/hangman-png/noose.png"
images[1]="img/hangman-png/hangman-0.png"
images[2]="img/hangman-png/hangman-1.png"
images[3]="img/hangman-png/hangman-2.png"
images[4]="img/hangman-png/hangman-3.png"
images[5]="img/hangman-png/hangman-4.png"
images[6]="img/hangman-png/hangman-5.png"
images[7]="img/hangman-png/hangman-6.png"



// Select random word to guess
function getWord()
{
  var a = new Array('abate','aberrant','abscond','accolade','acerbic','acumen','adulation','adulterate','aesthetic','aggrandize','alacrity','alchemy','amalgamate','ameliorate','amenable','anachronism','anomaly','approbation','archaic','arduous','ascetic','assuage','astringent','audacious','austere','avarice','aver','axiom','bolster','bombast','bombastic','bucolic','burgeon','cacophony','canon','canonical','capricious','castigation','catalyst','caustic','censure','chary','chicanery','cogent','complaisance','connoisseur','contentious','contrite','convention','convoluted','credulous','culpable','cynicism','dearth','decorum','demur','derision','desiccate','diatribe','didactic','dilettante','disabuse','discordant','discretion','disinterested','disparage','disparate','dissemble','divulge','dogmatic','ebullience','eccentric','eclectic','effrontery','elegy','eloquent','emollient','empirical','endemic','enervate','enigmatic','ennui','ephemeral','equivocate','erudite','esoteric','eulogy','evanescent','exacerbate','exculpate','exigent','exonerate','extemporaneous','facetious','fallacy','fawn','fervent','filibuster','flout','fortuitous','fulminate','furtive','garrulous','germane','glib','grandiloquence','gregarious','hackneyed','halcyon','harangue','hedonism','hegemony','heretical','hubris','hyperbole','iconoclast','idolatrous','imminent','immutable','impassive','impecunious','imperturbable','impetuous','implacable','impunity','inchoate','incipient','indifferent','inert','infelicitous','ingenuous','inimical','innocuous','insipid','intractable','intransigent','intrepid','inured','inveigle','irascible','laconic','laud','loquacious','lucid','luminous','magnanimity','malevolent','malleable','martial','maverick','mendacity','mercurial','meticulous','misanthrope','mitigate','mollify','morose','mundane','nebulous','neologism','neophyte','noxious','obdurate','obfuscate','obsequious','obstinate','obtuse','obviate','occlude','odious','onerous','opaque','opprobrium','oscillation','ostentatious','paean','parody','pedagogy','pedantic','penurious','penury','perennial','perfidy','perfunctory','pernicious','perspicacious','peruse','pervade','pervasive','phlegmatic','pine','pious','pirate','pith','pithy','placate','platitude','plethora','plummet','polemical','pragmatic','prattle','precipitate','precursor','predilection','preen','prescience','presumptuous','prevaricate','pristine','probity','proclivity','prodigal','prodigious','profligate','profuse','proliferate','prolific','propensity','prosaic','pungent','putrefy','quaff','qualm','querulous','query','quiescence','quixotic','quotidian','rancorous','rarefy','recalcitrant','recant','recondite','redoubtable','refulgent','refute','relegate','renege','repudiate','rescind','reticent','reverent','rhetoric','salubrious','sanction','satire','sedulous','shard','solicitous','solvent','soporific','sordid','sparse','specious','spendthrift','sporadic','spurious','squalid','squander','static','stoic','stupefy','stymie','subpoena','subtle','succinct','superfluous','supplant','surfeit','synthesis','tacit','tenacity','terse','tirade','torpid','torque','tortuous','tout','transient','trenchant','truculent','ubiquitous','unfeigned','untenable','urbane','vacillate','variegated','veracity','vexation','vigilant','vilify','virulent','viscous','vituperate','volatile','voracious','waver','zealous');
  return a[parseInt(Math.random()* a.length)];
}

function startGame()
{
	$('#play').css('display', 'inline-block').click(newGame);
}

function newGame()
{
	badGuess = 0;
	rightGuess = 0;
	word2Guess = getWord();
	wordLength = word2Guess.length;
	badguesses.innerHTML = '';
	
	var c = canvas.getContext('2d');
	canvas.width = canvas.width;

	var imageObj = new Image();
 	imageObj.onload = function() {
 	 	c.drawImage(imageObj, 230, -10);
 	};
 	imageObj.src = images[0];


	var underscores = '';
	for(var i = 0; i < wordLength; i++)
	{
		underscores += '-';
	}
	
	word.innerHTML = underscores;
}

function checkLetter(letter)
{
	var wordArray = word.innerHTML;
	var badguessesArray = badguesses.innerHTML;
	var badGuess2 = true;

	var y = wordArray.search(letter)
	if(y > -1)
	{
		alert("You've already CORRECTLY guessed this letter! Choose another!");
		return 0;
	}

	wordArray = wordArray.split('');

	for(var i=0; i < wordLength; i++)
	{
		if(word2Guess.charAt(i) == letter.toLowerCase())
		{
			wordArray[i] = letter;
			badGuess2 = false;
			rightGuess++;

			if(rightGuess == wordLength)
			{
				alert("Congrats you win!")//redraw canvas if all letters have been guessed
				newGame();
			}
		}
	}

	if (badGuess2) 
	{
		var x = badguessesArray.search(letter)
		if(x > -1)
		{
			alert("You've already INCORRECTLY guessed this letter! Choose another!");
		}
		else
		{
			badguesses.innerHTML += letter;
			badGuess++;
			drawCanvas();
		}
	}
	word.innerHTML = wordArray.join('');
	
}



function drawCanvas() {
	var c = canvas.getContext('2d');
	canvas.width = canvas.width;

	var imageObj = new Image();
 	imageObj.onload = function() {
 	 	c.drawImage(imageObj, 230, 0);
 	};
 	imageObj.src = images[badGuess];

 	if(badGuess == 7)
 	{
 		window.setTimeout(function(){lose();}, 100);
 		var x;
 		function lose()
 		{
			var r=confirm("You Lose! Wanna play again?");
			if (r==true)
	  		{
	  			newGame();
	  		}
			else
	 		{
	  			x="You pressed Cancel!";
	 		}
 		}
 	}
}

